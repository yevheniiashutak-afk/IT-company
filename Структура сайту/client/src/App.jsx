export default function App() {
  return `
    <header class="site-header">
      <a class="brand" href="#" aria-label="IT Company — на головну">
        <span class="brand-mark" aria-hidden="true">i</span>
        <span>IT Company</span>
      </a>
      <nav class="site-nav" aria-label="Головна навігація">
        <a href="#services">Послуги</a>
        <a href="#process">Як ми працюємо</a>
        <a class="nav-cta" href="#contact">Обговорити проєкт <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main>
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Цифрові рішення для зростання</p>
          <h1 id="hero-title">Створюємо технології, що <span>рухають бізнес</span></h1>
          <p class="hero-description">Допомагаємо компаніям перетворювати сміливі ідеї на зручні цифрові продукти — від стратегії до запуску.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Поговорімо про ваш проєкт <span aria-hidden="true">→</span></a>
            <a class="text-link" href="#services">Дізнатися більше <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-note"><span class="note-line" aria-hidden="true"></span><span>Прозорий процес. Відчутний результат.</span></div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="art-orbit orbit-one"></div>
          <div class="art-orbit orbit-two"></div>
          <div class="art-core"><span>IT</span><span class="core-caption">ideas<br>into impact</span></div>
          <span class="art-tag tag-top">design <span>✳</span></span>
          <span class="art-tag tag-side">technology <span>↗</span></span>
          <span class="art-tag tag-bottom">growth <span>＋</span></span>
        </div>
      </section>

      <section class="services section-wrap" id="services" aria-labelledby="services-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Що ми робимо</p>
            <h2 id="services-title">Ваш наступний крок — <span>разом із нами</span></h2>
          </div>
        </div>
        <div class="service-grid">
          <article class="service-card">
            <span class="service-number">01 / STRATEGY</span>
            <h3>Цифрова стратегія</h3>
            <p>Знаходимо правильний напрям і перетворюємо бізнес-цілі на зрозумілий план дій.</p>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>
          <article class="service-card">
            <span class="service-number">02 / DESIGN</span>
            <h3>Дизайн продукту</h3>
            <p>Створюємо інтуїтивний досвід і виразний дизайн, який працює для людей та бізнесу.</p>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>
          <article class="service-card">
            <span class="service-number">03 / DEVELOPMENT</span>
            <h3>Розробка рішень</h3>
            <p>Будуємо швидкі, надійні вебпродукти, готові до реальних навантажень і масштабування.</p>
            <span class="card-arrow" aria-hidden="true">↗</span>
          </article>
        </div>
      </section>

      <section class="contact section-wrap" id="contact" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Маєте ідею?</p>
          <h2 id="contact-title">Почнімо з розмови.</h2>
        </div>
        <a class="button button-light" href="#services">Переглянути послуги <span aria-hidden="true">↗</span></a>
      </section>
    </main>
    <footer class="site-footer" id="process">
      <span>© ${new Date().getFullYear()} IT Company</span>
      <span>Створюємо цифрове майбутнє разом.</span>
    </footer>
  `;
}