import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link className={styles.brand} to="/">
          <span className={styles.brandMark} aria-hidden="true">
            a
          </span>
          AutoSoft
        </Link>
        <p>Автоматизуємо рутину. Допомагаємо бізнесу зростати.</p>
        <Link className={styles.email} to="/faq">
          Є питання? Знайдіть відповідь у FAQ <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} AutoSoft. Усі права захищені.</span>
        <span>Зроблено з увагою до вашого бізнесу.</span>
      </div>
    </footer>
  );
}
