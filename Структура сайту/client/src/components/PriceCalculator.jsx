import { useState } from "react";
import styles from "./PriceCalculator.module.css";

const serviceOptions = [
  ["sales", "Автоматизація продажів", 1],
  ["accounting", "Запровадження обліку", 1.15],
  ["lighting", "Світлотехніка", 1.25],
  ["integration", "Інтеграція систем", 1.35],
  ["analytics", "Аналітика та звітність", 1.1],
  ["support", "Технічна підтримка", 0.8],
];

const teamOptions = [
  ["small", "1–5 співробітників", 1],
  ["medium", "6–20 співробітників", 1.5],
  ["large", "21–50 співробітників", 2],
  ["enterprise", "Понад 50 співробітників", 2.7],
];

const automationOptions = [
  ["basic", "Базова — один процес", 1],
  ["standard", "Стандартна — кілька процесів", 1.35],
  ["advanced", "Розширена — комплексна система", 1.8],
];

const formatPrice = (amount) => new Intl.NumberFormat("uk-UA").format(amount);

export default function PriceCalculator() {
  const [serviceId, setServiceId] = useState("sales");
  const [teamSize, setTeamSize] = useState("small");
  const [automationLevel, setAutomationLevel] = useState("basic");
  const serviceMultiplier = serviceOptions.find(([id]) => id === serviceId)[2];
  const teamMultiplier = teamOptions.find(([id]) => id === teamSize)[2];
  const automationMultiplier = automationOptions.find(([id]) => id === automationLevel)[2];
  const multiplier = serviceMultiplier * teamMultiplier * automationMultiplier;
  const priceFrom = Math.round((15000 * multiplier) / 1000) * 1000;
  const priceTo = Math.round((30000 * multiplier) / 1000) * 1000;

  return (
    <section className={styles.card} aria-label="Калькулятор вартості">
      <p className={styles.cardLabel}>ПОПЕРЕДНІЙ РОЗРАХУНОК</p>
      <label className={styles.field}>
        <span>Яка послуга вас цікавить?</span>
        <select value={serviceId} onChange={(event) => setServiceId(event.target.value)}>
          {serviceOptions.map(([id, label]) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span>Розмір команди або бізнесу</span>
        <select value={teamSize} onChange={(event) => setTeamSize(event.target.value)}>
          {teamOptions.map(([id, label]) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span>Рівень автоматизації</span>
        <select
          value={automationLevel}
          onChange={(event) => setAutomationLevel(event.target.value)}
        >
          {automationOptions.map(([id, label]) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.result} aria-live="polite">
        <span>Орієнтовна вартість</span>
        <strong>
          {formatPrice(priceFrom)} – {formatPrice(priceTo)} грн
        </strong>
        <small>Точна вартість залежить від обсягу та складності робіт.</small>
      </div>
      <p className={styles.disclaimer}>Без зобов’язань — остаточну оцінку підготує фахівець.</p>
    </section>
  );
}
