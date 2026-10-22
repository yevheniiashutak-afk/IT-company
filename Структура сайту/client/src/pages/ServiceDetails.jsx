import styles from "./ServiceDetailsPage.module.css";

const services = [
  {
    name: "Автоматизація продажів",
    description:
      "Налаштування воронок, карток клієнтів, розмежування прав, підключення IP-телефонії.",
    timeline: "5–10 днів",
    price: "від $500",
  },
  {
    name: "Інтеграція сервісів (API)",
    description:
      "Зв'язок CRM/сайту з Новою Поштою/Meest, Monobank/LiqPay, Checkbox/Вчасно, Prom/Rozetka.",
    timeline: "2–5 днів",
    price: "від $200",
  },
  {
    name: "Склад та фінанси",
    description: "Оцифровка залишків, собівартості, закупівель, касових операцій, звіти.",
    timeline: "7–14 днів",
    price: "від $650",
  },
  {
    name: "Розумні чат-боти",
    description:
      "Бот у Telegram/Viber для прийому замовлень, онлайн-запису, нагадувань та розсилок.",
    timeline: "3–7 днів",
    price: "від $350",
  },
  {
    name: "Сайти",
    description: "Landing Page або інтернет-магазин із готовими інтеграціями до CRM та складу.",
    timeline: "10–20 днів",
    price: "від $900",
  },
  {
    name: "Авто-документообіг",
    description: "Автоматична генерація ТТН, рахунків, актів та накладних в 1 клік із шаблонів.",
    timeline: "3–5 днів",
    price: "від $300",
  },
  {
    name: "Аудит та розробка ТЗ",
    description: "Аналіз бізнес-процесів «як є» -> «як має бути», складання детальної схеми та ТЗ.",
    timeline: "2–4 дні",
    price: "$300",
  },
];

const packages = [
  {
    name: "Express Start",
    price: "$850",
    features: [
      "CRM (до 5 осіб)",
      "2 API-інтеграції (Пошта + Оплата)",
      "Telegram-бот",
      "14 днів гарантії",
    ],
  },
  {
    name: "Business Pro",
    price: "$2,400",
    featured: true,
    features: [
      "Повний аудит та ТЗ",
      "CRM/ERP (Склад + Фінанси)",
      "Комплекс API (Сайт, Пошта, ПРРО, Оплата)",
      "Бот",
      "Авто-документи",
      "1 міс. підтримки 24/7",
    ],
  },
  {
    name: "Custom Enterprise",
    price: "$5,000",
    features: ["Кастомна ERP/B2B-система з нуля", "AI-модулі аналітики", "Виділена Senior-команда"],
  },
];

export default function ServiceDetails() {
  return (
    <main className={styles.page}>
      <section className={styles.servicesSection} aria-labelledby="services-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>AUTOSOFT · РІШЕННЯ ДЛЯ БІЗНЕСУ</p>
          <h1 id="services-title">ПОСЛУГИ</h1>
          <p className={styles.sectionDescription}>
            Автоматизуємо процеси, інтегруємо сервіси та створюємо рішення для вашої команди.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <article className={styles.serviceCard} key={service.name}>
              <span className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.name}</h2>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.serviceMeta}>
                <div>
                  <span>Термін</span>
                  <strong>{service.timeline}</strong>
                </div>
                <div>
                  <span>Ціна</span>
                  <strong>{service.price}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.packagesSection} aria-labelledby="packages-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>ГОТОВІ КОМПЛЕКСНІ РІШЕННЯ</p>
          <h2 id="packages-title">ПАКЕТНІ РІШЕННЯ «ПІД КЛЮЧ»</h2>
        </div>
        <div className={styles.packageGrid}>
          {packages.map((bundle) => (
            <article
              className={`${styles.packageCard} ${bundle.featured ? styles.featuredPackage : ""}`}
              key={bundle.name}
            >
              {bundle.featured && <span className={styles.packageBadge}>ПОПУЛЯРНИЙ</span>}
              <h3>{bundle.name}</h3>
              <p className={styles.packagePrice}>{bundle.price}</p>
              <ul>
                {bundle.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
