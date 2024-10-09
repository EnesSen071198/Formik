import * as yup from 'yup';

// Şifre kuralları: En az bir büyük harf, bir küçük harf ve bir rakam içermelidir.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

// Yup validasyon şeması
export const basicSchema = yup.object().shape({
  // İsim alanı: String ve boş bırakılamaz
  firstName: yup
    .string()
    .required('İsim girmek zorunludur') // Boş bırakılamaz hata mesajı
    .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, 'İsim sadece harflerden oluşmalıdır'), // Harf dışı karakterler engellenir

  // Soyisim alanı: String ve boş bırakılamaz
  lastName: yup
    .string()
    .required('Soyisim girmek zorunludur') // Boş bırakılamaz hata mesajı
    .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, 'Soyisim sadece harflerden oluşmalıdır'), // Harf dışı karakterler engellenir

  // E-mail alanı: Email formatında olmalı ve boş bırakılamaz
  email: yup
    .string()
    .email('Lütfen geçerli bir e-posta adresi giriniz') // Email formatı kontrolü
    .required('E-mail girmek zorunludur'), // Boş bırakılamaz hata mesajı

  // Telefon numarası: Pozitif tam sayı ve boş bırakılamaz
  phone: yup
    .number()
    .typeError('Lütfen geçerli bir telefon numarası giriniz') // Geçerli numara değilse hata
    .positive('Lütfen pozitif bir telefon numarası giriniz') // Pozitif kontrol
    .integer('Telefon numarası tam sayı olmalıdır') // Tam sayı kontrol
    .required('Telefon numarası girmek zorunludur'), // Boş bırakılamaz hata mesajı

  // Yaş: Pozitif tam sayı ve boş bırakılamaz
  age: yup
    .number()
    .typeError('Lütfen geçerli bir yaş giriniz') // Geçerli sayı değilse hata
    .positive('Lütfen pozitif bir yaş giriniz') // Pozitif kontrol
    .integer('Yaş tam sayı olmalıdır') // Tam sayı kontrol
    .required('Yaş girmek zorunludur'), // Boş bırakılamaz hata mesajı

  // Şifre: En az bir büyük harf, bir küçük harf, bir rakam ve minimum 5 karakter olmalıdır
  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter uzunluğunda olmalıdır') // Minimum karakter kontrolü
    .matches(passwordRules, { message: 'Şifre en az bir büyük harf, bir küçük harf ve bir rakam içermelidir' }) // Şifre kuralları
    .required('Şifre girmek zorunludur'), // Boş bırakılamaz hata mesajı

  // Şifre Tekrar: Şifre ile eşleşmeli ve boş bırakılamaz
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor') // Şifre eşleşme kontrolü
    .required('Şifreyi tekrar girmek zorunludur'), // Boş bırakılamaz hata mesajı
});
