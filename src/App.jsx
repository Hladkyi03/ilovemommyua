import './cssReset/reset.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Header } from './components/Header/Header';
import { Certificates } from './pages/Certificates';

export const App = () => {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route
          path="*"
          element={
            <h1 className="title">Сторінка не знайдена</h1>
          }
        />
      </Routes>


      {/* <footer className="footer"></footer> */}
    </>
  );
};
