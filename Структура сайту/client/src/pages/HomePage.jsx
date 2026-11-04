import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ServiceModal from "../components/ServiceModal.jsx";
import styles from "./HomePage.module.css";

const services = [
  {
    number: "01",
    title: "Автоматизація продажів",
    icon: "↗",
    description:
      "Налаштовуємо CRM і воронки продажів, об’єднуємо інформацію про клієнтів, автоматизуємо розподіл заявок та контроль роботи команди. Інтеграція телефонії й нагадувань допомагає не втрачати потенційних клієнтів і звільняє час менеджерів від рутинних задач.",
  },
  {
    number: "02",
    title: "Запровадження обліку",
    icon: "◫",
    description:
      "Впорядковуємо облік товарів, закупівель, залишків і фінансових операцій. Налаштовуємо єдину систему даних та звітів, щоб команда бачила актуальну інформацію й могла швидше ухвалювати рішення.",
  },
  {
    number: "03",
    title: "Світлотехніка",
    icon: "✳",
    description:
      "Підбираємо та впроваджуємо рішення зі світлотехніки відповідно до задач вашого простору. Допомагаємо спланувати освітлення, узгодити обладнання та організувати його інтеграцію в робочі процеси.",
  },
  {
    number: "04",
    title: "Інтеграція систем",
    icon: "⌘",
    description:
      "З’єднуємо CRM, сайт, служби доставки, платіжні системи та облік через API. Дані передаються між сервісами автоматично, що зменшує кількість ручного введення й помилок.",
  },
  {
    number: "05",
    title: "Аналітика та звітність",
    icon: "▥",
    description:
      "Створюємо зрозумілі звіти та об’єднуємо ключові показники з різних систем. Допомагаємо відстежувати продажі, фінанси й ефективність процесів, щоб рішення ґрунтувалися на актуальних даних.",
  },
  {
    number: "06",
    title: "Технічна підтримка",
    icon: "◉",
    description:
      "Супроводжуємо впроваджені системи, допомагаємо команді з повсякденними питаннями та оперативно розбираємося з технічними проблемами. За потреби оновлюємо налаштування й адаптуємо рішення до нових задач бізнесу.",
  },
];

const steps = [
  "Аналізуємо бізнес",
  "Знаходимо проблеми",
  "Створюємо план",
  "Впроваджуємо рішення",
  "Підтримуємо систему",
];

export default function HomePage() {
  const { openConsultation } = useOutletContext();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.pulse} aria-hidden="true" />
            ЦИФРОВІ РІШЕННЯ ДЛЯ ВАШОГО БІЗНЕСУ
          </p>
          <h1>
            Автоматизуємо бізнес <span>–</span> <br />
            ви займаєтесь розвитком
          </h1>
          <p className={styles.heroDescription}>
            Об’єднуємо процеси, системи та дані, щоб ви могли зосередитись на розвитку компанії.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/services">
              Наші послуги <span aria-hidden="true">↗</span>
            </Link>
            <a className={styles.secondaryLink} href="#process">
              Як ми працюємо <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.proof}>
            <span className={styles.proofLine} />
            Автоматизація, що працює на вас.
          </div>
        </div>
        <div className={styles.visual} aria-label="Ілюстрація автоматизованих процесів">
          <div className={styles.visualGrid} />
          <div className={styles.visualOrbit} />
          <div className={styles.visualCircle}>
            <span className={styles.visualMonogram}>a</span>
            <span className={styles.visualLabel}>AUTOSOFT / BUSINESS FLOW</span>
          </div>
          <div className={`${styles.floatingCard} ${styles.cardTop}`}>
            <span className={styles.cardIcon}>↗</span>
            <span>
              <strong>Продажі</strong>
              <small>Процеси автоматизовано</small>
            </span>
          </div>
          <div className={`${styles.floatingCard} ${styles.cardSide}`}>
            <span className={styles.cardIcon}>✓</span>
            <span>
              <strong>Системи інтегровані</strong>
              <small>Дані в одному місці</small>
            </span>
          </div>
          <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
            <span className={styles.cardIcon}>◷</span>
            <span>
              <strong>Фокус на розвитку</strong>
              <small>Менше ручної роботи</small>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>ЩО МИ ПРОПОНУЄМО</p>
            <h2>Рішення для кожного етапу розвитку.</h2>
          </div>
          <Link to="/services" className={styles.faqLink}>
            Детальніше про послуги <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <div className={styles.serviceCardTop}>
                <span>{service.number} / AUTOSOFT</span>
                <span className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>Дізнайтесь, як це рішення допоможе вашій команді працювати ефективніше.</p>
              <button
                className={styles.cardLink}
                onClick={() => setSelectedService(service)}
                type="button"
              >
                Детальніше <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} id="process">
        <div className={styles.processIntro}>
          <p className={styles.eyebrow}>ЯК МИ ПРАЦЮЄМО</p>
          <h2>П’ять кроків до ефективного бізнесу.</h2>
          <p>Послідовно проходимо шлях від розуміння потреб до підтримки готового рішення.</p>
        </div>
        <div className={styles.steps}>
          {steps.map((title, index) => (
            <article className={styles.step} key={title}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <div className={styles.stepRule} />
              <h3>{title}</h3>
              {index < steps.length - 1 && <span className={styles.stepArrow}>→</span>}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.calculatorSection} id="calculator">
        <div className={styles.calculatorIntro}>
          <p className={styles.eyebrow}>КАЛЬКУЛЯТОР ВАРТОСТІ</p>
          <h2>
            Дізнайтесь орієнтовну
            <br />
            вартість рішення.
          </h2>
          <p>
            Оберіть послугу, розмір команди та рівень автоматизації, щоб отримати попередню оцінку
            вартості.
          </p>
          <Link className={styles.primaryButton} to="/calculator">
            Розрахувати <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.homeFaq} id="questions">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>ЧАСТІ ПИТАННЯ</p>
            <h2>Коротко про головне.</h2>
          </div>
          <Link to="/faq" className={styles.faqLink}>
            Усі відповіді <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={styles.faqList}>
          <details className={styles.faqItem} open>
            <summary>
              З чого починається автоматизація?
              <span aria-hidden="true">+</span>
            </summary>
            <p>Аналізуємо бізнес-процеси, визначаємо точки зростання та разом узгоджуємо план.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>
              Чи можна автоматизувати лише один напрям?
              <span aria-hidden="true">+</span>
            </summary>
            <p>Так, починаємо з потрібного вам напряму й за потреби масштабуємо рішення.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>
              Чи надаєте ви підтримку після впровадження?
              <span aria-hidden="true">+</span>
            </summary>
            <p>Так, допомагаємо команді адаптуватися та підтримуємо систему після запуску.</p>
          </details>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutBadge} aria-hidden="true">
          <span>AS</span>
          <small>
            ПРОСТО
            <br />
            ПРАЦЮЄ
          </small>
        </div>
        <div className={styles.aboutCopy}>
          <p className={styles.eyebrow}>ПРО AUTOSOFT</p>
          <h2>
            Технології мають
            <br />
            працювати на бізнес.
          </h2>
          <p>
            Допомагаємо компаніям спростити щоденні процеси, об’єднати робочі системи та
            зосередитись на розвитку. Розробляємо рішення, орієнтуючись на потреби людей і результат
            бізнесу.
          </p>
          <div className={styles.stats}>
            <div>
              <strong>8+</strong>
              <span>років досвіду</span>
            </div>
            <div>
              <strong>120</strong>
              <span>процесів спрощено</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>підтримка систем</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.callout}>
        <div>
          <p className={styles.eyebrow}>ГОТОВІ РОЗПОЧАТИ?</p>
          <h2>Обговорімо ваші задачі.</h2>
        </div>
        <button className={styles.calloutButton} onClick={openConsultation} type="button">
          Отримати консультацію <span aria-hidden="true">↗</span>
        </button>
      </section>
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </main>
  );
}
