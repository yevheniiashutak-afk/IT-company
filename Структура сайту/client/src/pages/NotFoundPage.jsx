import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.page} aria-labelledby="not-found-title">
      <section className={styles.content}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title">Упс! Сторінку не знайдено</h1>
        <p className={styles.description}>
          Такої сторінки не існує або адресу введено неправильно. Перевірте посилання чи поверніться
          на головну.
        </p>
        <Link className={styles.homeLink} to="/">
          Повернутися на головну
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
