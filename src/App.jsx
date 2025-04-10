import { useState } from 'react';
import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SignJWT } from 'jose';
import { useNavigate } from 'react-router-dom';
import styles from '../public/global.module.css';

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
      navigate('/acessoadmin');
    } catch (err) {
      alert('Erro ao autenticar: ', err);
    }
  };

  return (
    <main>
      <form onSubmit={authWithFirebase}>
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          id="senha"
          name="senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <button>AUTENTICAR</button>
      </form>
    </main>
  );
}
