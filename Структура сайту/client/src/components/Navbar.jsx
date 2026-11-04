import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ onConsultation, onLogin, onRegister, isLoggedIn, onLogout }) {
  const { pathname } = useLocation();
  const activeClass = (path) => (pathname === path ? styles.active : "");
  const isServicesRoute = pathname.startsWith("/services");

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} to="/" aria-label="AutoSoft — головна">
          <span className={styles.brandMark} aria-hidden="true">
            a
          </span>
          <span>
            Auto<span className={styles.brandAccent}>Soft</span>
          </span>
        </Link>
        <nav className={styles.navigation} aria-label="Головна навігація">
          <Link to="/" className={activeClass("/")}>
            Головна
          </Link>
          <Link to="/services" className={isServicesRoute ? styles.active : ""}>
            Послуги
          </Link>
          <Link to="/faq" className={activeClass("/faq")}>
            FAQ
          </Link>
          <Link to="/dashboard" className={activeClass("/dashboard")}>
            Кабінет
          </Link>
        </nav>
        <div className={styles.actions}>
          <button className={styles.consultButton} onClick={onConsultation} type="button">
            Консультація
          </button>
          {isLoggedIn ? (
            <button className={styles.loginButton} onClick={onLogout} type="button">
              Вийти
            </button>
          ) : (
            <>
              <button className={styles.loginButton} onClick={onLogin} type="button">
                Увійти
              </button>
              <button className={styles.contactButton} onClick={onRegister} type="button">
                Реєстрація <span aria-hidden="true">↗</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
