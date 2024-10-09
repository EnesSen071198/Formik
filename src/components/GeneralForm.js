import React from 'react';
import { useFormik } from 'formik';
import '../styles/GeneralForm.css';
import { basicSchema } from '../schemas';

const onSubmit = () => {
  // Form gönderme işlemi
};

function GeneralForm({ handleShowPortal }) {  // handleShowPortal props olarak alınıyor
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      university: '',  // Üniversite alanı
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-column">
        {/* İsim */}
        <div className="form-field">
          <label htmlFor="firstName">İsim</label>
          <input
            type="text"
            value={values.firstName}
            id="firstName"
            placeholder="İsminizi Girin"
            onChange={handleChange}
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        {/* Soyisim */}
        <div className="form-field">
          <label htmlFor="lastName">Soyisim</label>
          <input
            type="text"
            value={values.lastName}
            id="lastName"
            placeholder="Soyisminizi Girin"
            onChange={handleChange}
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        {/* E-mail */}
        <div className="form-field">
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            value={values.email}
            id="email"
            placeholder="E-mail Adresinizi Girin"
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Telefon */}
        <div className="form-field">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            value={values.phone}
            id="phone"
            placeholder="Telefon Numaranızı Girin"
            onChange={handleChange}
            className={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>

      <div className="form-column">
        {/* Yaş */}
        <div className="form-field">
          <label htmlFor="age">Yaş</label>
          <input
            type="number"
            value={values.age}
            id="age"
            placeholder="Yaşınızı Giriniz"
            onChange={handleChange}
            className={errors.age ? 'input-error' : ''}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        {/* Şifre */}
        <div className="form-field">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            value={values.password}
            id="password"
            placeholder="Şifrenizi Giriniz"
            onChange={handleChange}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* Şifre Tekrar */}
        <div className="form-field">
          <label htmlFor="confirmPassword">Şifre Tekrar</label>
          <input
            type="password"
            value={values.confirmPassword}
            id="confirmPassword"
            placeholder="Şifrenizi Tekrar Giriniz"
            onChange={handleChange}
            className={errors.confirmPassword ? 'input-error' : ''}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        {/* Portal Giriş Butonu */}
        <div className="form-field">
          <button type="button" onClick={handleShowPortal} className="portal-button-inline">
            Portal Giriş
          </button>
        </div>
      </div>

      {/* Üniversite Seçim Alanı */}
      <div className="form-field full-width">
        <label htmlFor="university">Üniversite</label>
        <select
          id="university"
          name="university"
          value={values.university}
          onChange={handleChange}
          className={errors.university ? 'input-error' : ''}
        >
          <option value="" label="Üniversitenizi Seçin" />
          <option value="Kütahya Dumlupınar Üniversitesi" label="Kütahya Dumlupınar Üniversitesi" />
          <option value="Boğaziçi Üniversitesi" label="Boğaziçi Üniversitesi" />
          <option value="İstanbul Teknik Üniversitesi" label="İstanbul Teknik Üniversitesi" />
          <option value="Orta Doğu Teknik Üniversitesi" label="Orta Doğu Teknik Üniversitesi" />
          {/* Diğer üniversiteleri buraya ekleyebilirsiniz */}
        </select>
        {errors.university && <p className="error">{errors.university}</p>}
      </div>

      {/* Kaydet Butonu */}
      <button type="submit" className="submit-button">
        Kaydet
      </button>
    </form>
  );
}

export default GeneralForm;
