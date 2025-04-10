import { Link } from 'react-router-dom';
import styles from '../public/global.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Bem-vindo!</h1>
        <p>Você está logado!</p>
        <Link to="/login">
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </div>
    </main>
  );
}
