import { useState } from "react";
import useFetch from "../hooks/useFetch.js";
import styles from "./ConsultationModal.module.css";

export default function ConsultationModal({ onClose }) {
  const { request, loading, error } = useFetch();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSuccess(false);
    try {
      await request({
        url: "/consultation",
        method: "POST",
        data: {
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
        },
      });
      form.reset();
      setSuccess(true);
    } catch {
      // The hook exposes the request error for display below the submit button.
    }
  };

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
        <form className={styles.form} onSubmit={handleSubmit}>
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
            name="message"
            rows="3"
            placeholder="Коротко опишіть вашу задачу"
            required
          />
          <button className={styles.submit} type="submit" disabled={loading}>
            {loading ? "Надсилання..." : "Відправити заявку"}
            {!loading && <span aria-hidden="true">↗</span>}
          </button>
          {success && (
            <p className={styles.successMessage} role="status">
              Заявку успішно відправлено!
            </p>
          )}
          {error && (
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
