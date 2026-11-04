import { Link } from "react-router-dom";
import styles from "./FaqPage.module.css";

const questions = [
  {
    question: "З чого починається робота з AutoSoft?",
    answer:
      "Починаємо з короткої консультації: знайомимось із вашою командою, цілями та процесами. Після цього пропонуємо зрозумілий план і наступні кроки.",
  },
  {
    question: "Чи потрібно змінювати всі інструменти одразу?",
    answer:
      "Ні. Ми можемо почати з одного процесу, інтегрувати вже знайомі вам інструменти й рухатись поступово, у зручному для команди темпі.",
  },
  {
    question: "Скільки часу займає впровадження?",
    answer:
      "Тривалість залежить від кількості процесів і систем. Після знайомства ми погоджуємо реалістичний графік із чіткими етапами та проміжними результатами.",
  },
  {
    question: "Чи навчаєте ви команду працювати з рішенням?",
    answer:
      "Так. Перед запуском ми готуємо команду, показуємо основні сценарії та передаємо матеріали, до яких можна повернутися після навчання.",
  },
  {
    question: "Чи можна звернутися, якщо я ще не знаю, що саме автоматизувати?",
    answer:
      "Звісно. Разом визначимо, де ручні операції забирають найбільше часу, і пріоритезуємо покращення за користю для вашого бізнесу.",
  },
];

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <p className={styles.eyebrow}>ЦЕНТР ДОПОМОГИ / FAQ</p>
        <h1>
          Відповіді на
          <br />
          <span>важливі питання.</span>
        </h1>
        <p>Зібрали найчастіші запитання про автоматизацію та співпрацю з AutoSoft.</p>
      </section>
      <section className={styles.faq} aria-label="Часті питання">
        {questions.map((item, index) => (
          <details className={styles.item} key={item.question} open={index === 0}>
            <summary>
              <span className={styles.index}>0{index + 1}</span>
              <span>{item.question}</span>
              <span className={styles.toggle} aria-hidden="true">
                +
              </span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>
      <aside className={styles.more}>
        <div>
          <strong>Не знайшли відповідь?</strong>
          <p>Розкажіть нам про задачу — разом знайдемо рішення.</p>
        </div>
        <Link to="/">
          Повернутися на головну <span aria-hidden="true">↗</span>
        </Link>
      </aside>
    </main>
  );
}
