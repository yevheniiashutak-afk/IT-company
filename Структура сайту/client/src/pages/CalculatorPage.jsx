import { Link } from "react-router-dom";
import PriceCalculator from "../components/PriceCalculator.jsx";
import styles from "./CalculatorPage.module.css";

export default function CalculatorPage() {
  return (
    <main className={styles.page}>
      <section className={styles.calculator} aria-labelledby="calculator-title">
        <div className={styles.intro}>
          <Link className={styles.backLink} to="/">
            <span aria-hidden="true">&larr;</span> На головну
          </Link>
          <p className={styles.eyebrow}>AUTOSOFT · ПОПЕРЕДНЯ ОЦІНКА</p>
          <h1 id="calculator-title">
            Розрахуйте
            <br />
            вартість рішення.
          </h1>
          <p className={styles.description}>
            Вкажіть тип послуги, розмір бізнесу та бажаний рівень автоматизації. Орієнтовна вартість
            оновиться автоматично.
          </p>
        </div>
        <PriceCalculator />
      </section>
    </main>
  );
}
