import React, { useState } from 'react';
import '../styles/Portal.css';

function Portal({ handleBackToForm }) {  // Geri dön fonksiyonunu App'ten props ile alıyoruz
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    university: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.university) {
      setIsLoggedIn(true);
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <div className="portal-container">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="portal-form">
          <h2>Portal Giriş</h2>
          <div>
            <label htmlFor="firstName">İsim</label>
            <input
              type="text"
              name="firstName"
              placeholder="İsminizi Girin"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Soyisim</label>
            <input
              type="text"
              name="lastName"
              placeholder="Soyisminizi Girin"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Üniversite Seçimi */}
          <div className="form-field full-width">
            <label htmlFor="university">Üniversite</label>
            <select
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
            >
              <option value="" label="Üniversitenizi Seçin" />
              <option value="Kütahya Dumlupınar Üniversitesi" label="Kütahya Dumlupınar Üniversitesi" />
              <option value="Boğaziçi Üniversitesi" label="Boğaziçi Üniversitesi" />
              <option value="İstanbul Teknik Üniversitesi" label="İstanbul Teknik Üniversitesi" />
              <option value="Orta Doğu Teknik Üniversitesi" label="Orta Doğu Teknik Üniversitesi" />
              {/* Diğer üniversiteleri buraya ekleyebilirsiniz */}
            </select>
          </div>

          <button type="submit" className="submit-button">Giriş Yap</button>
          {/* Geri Dön Butonu */}
          <button type="button" className="back-button" onClick={handleBackToForm}>
            Geri Dön
          </button>
        </form>
      ) : (
        <div className="welcome-message">
          <h2>Hoş Geldiniz, {formData.firstName} {formData.lastName}!</h2>
          <p>{formData.university} Üniversitesinden giriş yaptınız.</p>
          <button type="button" className="back-button" onClick={handleBackToForm}>
            Geri Dön
          </button>
        </div>
      )}
    </div>
  );
}

export default Portal;
