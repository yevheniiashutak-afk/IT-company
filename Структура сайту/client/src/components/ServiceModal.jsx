import { useEffect } from "react";
import styles from "./ServiceModal.module.css";

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
      >
        <button
          className={styles.back}
          onClick={onClose}
          type="button"
          aria-label="Повернутися назад"
        >
          &larr;
        </button>
        <p className={styles.eyebrow}>ДЕТАЛІ ПОСЛУГИ</p>
        <h2 id="service-modal-title">{service.title}</h2>
        <p className={styles.description} id="service-modal-description">
          {service.description}
        </p>
      </section>
    </div>
  );
}
