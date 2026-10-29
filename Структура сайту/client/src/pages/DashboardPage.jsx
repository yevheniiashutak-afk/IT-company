import { Link } from "react-router-dom";
import styles from "./DashboardPage.module.css";

const transactions = [
  ["17 жовт. 2026", "Оплата підписки", "AutoSoft Pro", "Активна", "₴ 1 490"],
  ["14 жовт. 2026", "Автоматизація продажів", "Впровадження", "Завершено", "₴ 8 500"],
  ["08 жовт. 2026", "Інтеграція CRM", "Додаткова послуга", "Завершено", "₴ 2 800"],
  ["01 жовт. 2026", "Оплата підписки", "AutoSoft Pro", "Завершено", "₴ 1 490"],
];

const menuItems = [
  ["▦", "Огляд", true],
  ["◷", "Операції", false],
  ["◇", "Мої послуги", false],
  ["⚙", "Налаштування", false],
];

export default function DashboardPage() {
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
            <span className={styles.userAvatar}>АК</span>
            <span className={styles.userName}>
              Андрій Коваленко<small>Власник акаунта</small>
            </span>
            <span className={styles.userArrow} aria-hidden="true">
              ⌄
            </span>
          </div>
        </header>
        <div className={styles.welcome}>
          <div>
            <p className={styles.date}>СУБОТА, 17 ЖОВТНЯ 2026</p>
            <h1>
              Доброго дня, Андрію <span>✳</span>
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
              24,850.00 <small>грн</small>
            </strong>
            <span className={styles.metricNote}>
              <i className={styles.greenDot} />
              Баланс акаунта
            </span>
            <span className={`${styles.metricIcon} ${styles.iconGreen}`}>₴</span>
          </article>
          <article className={styles.metric}>
            <span className={styles.metricLabel}>АКТИВНІ ПОСЛУГИ</span>
            <strong>03</strong>
            <span className={styles.metricNote}>Усі працюють</span>
            <span className={`${styles.metricIcon} ${styles.iconBlue}`}>◷</span>
          </article>
          <article className={styles.metric}>
            <span className={styles.metricLabel}>ЗАВДАННЯ В РОБОТІ</span>
            <strong>07</strong>
            <span className={styles.metricNote}>2 очікують на вас</span>
            <span className={`${styles.metricIcon} ${styles.iconYellow}`}>◷</span>
          </article>
        </div>
        <section className={styles.operations}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Останні операції</h2>
              <p>Історія оплат і замовлених послуг</p>
            </div>
            <a href="#transactions">
              Переглянути всі <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>ДАТА</th>
                  <th>ОПЕРАЦІЯ</th>
                  <th>ДЕТАЛІ</th>
                  <th>СТАТУС</th>
                  <th>СУМА</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(([date, title, detail, status, amount]) => (
                  <tr key={`${date}-${title}`}>
                    <td>{date}</td>
                    <td className={styles.operationName}>{title}</td>
                    <td>{detail}</td>
                    <td>
                      <span
                        className={status === "Активна" ? styles.statusActive : styles.statusDone}
                      >
                        {status}
                      </span>
                    </td>
                    <td className={styles.amount}>{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.bottomCards}>
          <article className={styles.planCard}>
            <div>
              <span className={styles.planTag}>НАСТУПНИЙ ПЛАТІЖ</span>
              <span className={styles.planStatus}>● ЗАПЛАНОВАНО</span>
            </div>
            <h2>₴ 1 490 · AutoSoft Pro</h2>
            <p>Наступна оплата — 01 листопада 2026</p>
            <div className={styles.planProgress}>
              <span />
            </div>
            <small>Використано 68% доступних ресурсів</small>
          </article>
          <article className={styles.nextCard}>
            <span className={styles.nextIcon}>✳</span>
            <div>
              <span className={styles.planTag}>НАСТУПНИЙ КРОК</span>
              <h2>Завершіть налаштування профілю</h2>
              <p>Додайте дані компанії, щоб отримати більше від AutoSoft.</p>
            </div>
            <a href="#profile" aria-label="Перейти до налаштувань">
              ↗
            </a>
          </article>
        </section>
      </section>
    </main>
  );
}
