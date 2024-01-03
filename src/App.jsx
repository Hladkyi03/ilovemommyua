import './cssReset/reset.css';
import './App.scss';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Certificates } from './pages/CertificatesPage/Certificates';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { BoysPage } from './pages/BoysPage/BoysPage';
import { GirlsPage } from './pages/GirlsPage/GirlsPage';
import { ToysPage } from './pages/ToysPage/ToysPage';
import { HomePage } from './pages/HomePage/HomePage';
import { Payment } from './pages/Payment/Payment';
import { ModalOverlay } from './components/ModalOverlay/ModalOverlay';
import { useEffect, useState } from 'react';
import { CartPage } from './pages/Cart/CartPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';


export const App = () => {
  const [modalEnabled, setModalEnabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (modalEnabled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalEnabled]);

  return (
    <>
      <Header setModalEnabled={setModalEnabled} />

      {modalEnabled && <ModalOverlay setModalOverlay={setModalEnabled} />}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forBoys" element={<BoysPage />} />
        <Route path="/forGirls" element={<GirlsPage />} />
        <Route path="/toys" element={<ToysPage />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="*"
          element={
            <h1 className="title">Сторінка не знайдена</h1>
          }
        />
      </Routes>
    </>
  );
};
