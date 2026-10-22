import styles from "./ConsultationModal.module.css";

export default function ConsultationModal({ onClose }) {
  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
      >
        <button className={styles.close} onClick={onClose} type="button" aria-label="Закрити вікно">
          ×
        </button>
        <p className={styles.eyebrow}>ПЕРША РОЗМОВА — БЕЗ ЗОБОВ’ЯЗАНЬ</p>
        <h2 id="consultation-title">
          Запис на
          <br />
          <span>консультацію.</span>
        </h2>
        <p className={styles.description}>
          Розкажіть коротко про свою задачу — ми зв’яжемося та підкажемо, з чого почати.
        </p>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="consult-name">Ваше ім’я</label>
          <input id="consult-name" name="name" autoComplete="name" placeholder="Ім’я" required />
          <label htmlFor="consult-email">Робочий email</label>
          <input
            id="consult-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
          />
          <label htmlFor="consult-phone">Номер телефону</label>
          <input
            id="consult-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+380"
            required
          />
          <label htmlFor="consult-company">Назва компанії</label>
          <input
            id="consult-company"
            name="company"
            autoComplete="organization"
            placeholder="Назва компанії"
            required
          />
          <label htmlFor="consult-topic">Повідомлення</label>
          <textarea
            id="consult-topic"
            name="topic"
            rows="3"
            placeholder="Коротко опишіть вашу задачу"
            required
          />
          <button className={styles.submit} type="submit">
            Відправити заявку <span aria-hidden="true">↗</span>
          </button>
        </form>
      </section>
    </div>
  );
}
