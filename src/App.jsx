import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignJWT } from 'jose';
import { useNavigate, Link } from 'react-router-dom';
import './global.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const authWithFirebase = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);

      const secretKey = new TextEncoder().encode('minhaChaveSecreta');
      const token = await new SignJWT({ user: 'admin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey);

      localStorage.setItem('token', token);

      alert('Logado com sucesso!');
      navigate('/admin');
    } catch (err) {
      alert('Erro ao autenticar: ', err);
    }
  };

  return (
    <main className='loginContainer'>
      <form onSubmit={authWithFirebase} className="loginForm">
        <label htmlFor="email" className="loginLabel">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="loginInput"  
        />
        <label htmlFor="senha" className="loginLabel">Senha:</label>
        <input
          id="senha"
          name="senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
          className="loginInput"
        />
        <button className="loginButton">AUTENTICAR</button>
      </form>
      <Link to='/registro'>
        <p className="homeText">Não tenho uma conta</p>
      </Link>
    </main>
  );
}
