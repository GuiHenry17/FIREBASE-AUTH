import { createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
import { useState } from "react";
import { auth } from "./config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import './global.css';

export default function Registrar() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate('/login');
    } catch (error) {
      alert("Erro ao cadastrar");
    }
  };

  return (
    <main className="registrarContainer">
      <h1 className="homeTitle">Bem-vindo!</h1>
      <form onSubmit={handleRegister} className="registrarForm">
        <label htmlFor="email" className="registrarLabel">E-mail:</label>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="registrarInput"
        />
        <label htmlFor="senha" className="registrarLabel">Senha:</label>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
          className="registrarInput"
        />
        <button className="registrarButton">REGISTRAR</button>
      </form>
    </main>
  );
}
