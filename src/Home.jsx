import { Link } from 'react-router-dom';
import './global.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <main className="homeContainer">
      <div className="homeHeader">
        <h1 className="homeTitle">Bem-vindo!</h1>
        <p className="homeText">Você está logado!</p>
        <Link to="/login">
          <button className="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </div>
    </main>
  );
}
