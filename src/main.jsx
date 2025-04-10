import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthMiddleware from './AuthMiddleware.jsx';
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthMiddleware />}>
          <Route path="/acessoadmin" element={<Home />} />
        </Route>
        <Route path="/login" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
