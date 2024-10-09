import React, { useState } from 'react';
import GeneralForm from './components/GeneralForm';  // GeneralForm bileşeni
import Portal from './components/Portal';  // Portal bileşeni
import './styles/GeneralForm.css';  // CSS dosyası

function App() {
  const [showPortal, setShowPortal] = useState(false);  // Portal görünürlüğünü kontrol eden state

  const handleShowPortal = () => {
    setShowPortal(true);  // Portal açılır
  };

  const handleBackToForm = () => {
    setShowPortal(false);  // Portal kapanır, form tekrar görünür
  };

  return (
    <div className="App">
      {!showPortal ? (  // Portal açık değilse ana form gösterilir
        <div>
          <GeneralForm handleShowPortal={handleShowPortal} />  {/* handleShowPortal fonksiyonunu props ile gönderiyoruz */}
        </div>
      ) : (
        <Portal handleBackToForm={handleBackToForm} />  // Portal açıkken giriş ekranı gösterilir
      )}
    </div>
  );
}

export default App;
