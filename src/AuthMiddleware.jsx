import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useState, useEffect } from 'react';

export default function AuthMiddleware() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const secretKey = new TextEncoder().encode('minhaChaveSecreta');
          await jwtVerify(token, secretKey);
          setIsAuthenticated(true);
        } catch (err) {
          console.error('Erro ao verificar o token:', err);
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <Link to="/login">Sem acesso!</Link>;
  }

  return isAuthenticated ? <Outlet /> : navigate('/login');
}
