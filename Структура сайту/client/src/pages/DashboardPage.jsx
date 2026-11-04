import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DashboardPage.module.css";

const menuItems = [
  ["▦", "Огляд", true],
  ["◷", "Операції", false],
  ["◇", "Мої послуги", false],
  ["⚙", "Налаштування", false],
];

function getStoredUser() {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Не вдалося прочитати дані користувача з localStorage.", error);
    return null;
  }
}

export default function DashboardPage() {
  const [user] = useState(getStoredUser);
  const userName =
    user?.name ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    user?.email ||
    "Користувач";
  const initials = userName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => [...part][0].toLocaleUpperCase("uk-UA"))
    .join("");
  const currentDate = new Intl.DateTimeFormat("uk-UA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(new Date())
    .toLocaleUpperCase("uk-UA");

  return (
    <main className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <span className={styles.brandMark}>a</span>
          <span>
            AutoSoft<span className={styles.sidebarPro}> CLIENT</span>
          </span>
        </div>
        <p className={styles.menuLabel}>КАБІНЕТ</p>
        <nav className={styles.menu} aria-label="Меню кабінету">
          {menuItems.map(([icon, label, active]) => (
            <a className={active ? styles.menuActive : ""} href="#overview" key={label}>
              <span aria-hidden="true">{icon}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className={styles.helpCard}>
          <span className={styles.helpIcon}>?</span>
          <strong>Потрібна допомога?</strong>
          <p>Наша команда на зв’язку.</p>
          <Link to="/faq">
            Відкрити довідку <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link className={styles.logout} to="/">
          ← На сайт AutoSoft
        </Link>
      </aside>
      <section className={styles.content} id="overview">
        <header className={styles.topbar}>
          <div className={styles.pageTitle}>Особистий кабінет</div>
          <div className={styles.user}>
            <span className={styles.notification} aria-label="Сповіщення">
              ♧<i />
            </span>
            <span className={styles.userAvatar}>{initials}</span>
            <span className={styles.userName}>
              {userName}
              <small>Користувач</small>
            </span>
            <span className={styles.userArrow} aria-hidden="true">
              ⌄
            </span>
          </div>
        </header>
        <div className={styles.welcome}>
          <div>
            <p className={styles.date}>{currentDate}</p>
            <h1>
              Доброго дня, {userName} <span>✳</span>
            </h1>
            <p>Ось короткий огляд вашого облікового запису.</p>
          </div>
          <Link className={styles.supportButton} to="/">
            На головну <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.metrics}>
          <article className={styles.metric}>
            <span className={styles.metricLabel}>ДОСТУПНИЙ БАЛАНС</span>
            <strong>
              0.00 <small>грн</small>
            </strong>
            <span className={styles.metricNote}>
              <i className={styles.greenDot} />
              Баланс акаунта
            </span>
            <span className={`${styles.metricIcon} ${styles.iconGreen}`}>₴</span>
          </article>
          <article className={styles.metric}>
            <span className={styles.metricLabel}>АКТИВНІ ПОСЛУГИ</span>
            <strong>0</strong>
            <span className={styles.metricNote}>Послуг ще немає</span>
            <span className={`${styles.metricIcon} ${styles.iconBlue}`}>◷</span>
          </article>
          <article className={styles.metric}>
            <span className={styles.metricLabel}>ЗАВДАННЯ В РОБОТІ</span>
            <strong>0</strong>
            <span className={styles.metricNote}>Завдань ще немає</span>
            <span className={`${styles.metricIcon} ${styles.iconYellow}`}>◷</span>
          </article>
        </div>
        <section className={styles.operations}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Останні операції</h2>
              <p>Історія оплат і замовлених послуг</p>
            </div>
          </div>
          <div className={styles.emptyState}>
            <p>У вас поки немає здійснених операцій або замовлених послуг.</p>
            <Link className={styles.supportButton} to="/">
              Обрати послуги <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
