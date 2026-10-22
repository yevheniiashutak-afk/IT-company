import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";

export default function RegistrationModal({
  onClose,
  onAuthenticated,
  onSwitchMode,
  isLogin = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    onAuthenticated();
    onClose();
    navigate("/dashboard");
  };

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
      >
        <button className={styles.close} onClick={onClose} type="button" aria-label="Закрити">
          ×
        </button>
        <div className={styles.formSide}>
          <Link className={styles.brand} to="/">
            <span className={styles.brandMark}>a</span> AutoSoft
          </Link>
          <p className={styles.eyebrow}>
            {isLogin ? "З РАДІСТЮ ВІТАЄМО ЗНОВУ" : "СТВОРИТИ АКАУНТ"}
          </p>
          <h1 id="auth-title">
            {isLogin ? "Увійдіть до" : "Створіть акаунт"}
            <br />
            <span>AutoSoft.</span>
          </h1>
          <p className={styles.lead}>
            {isLogin
              ? "Увійдіть, щоб продовжити користуватися AutoSoft."
              : "Зареєструйтесь, щоб користуватися всіма можливостями AutoSoft."}
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <label htmlFor="auth-name">Ім’я та прізвище</label>
                <input
                  id="auth-name"
                  name="name"
                  placeholder="Ваше ім’я та прізвище"
                  autoComplete="name"
                  required
                />
              </>
            )}
            <label htmlFor="auth-email">Email</label>
            <input
              id="auth-email"
              name="email"
              type="email"
              placeholder="name@company.com"
              autoComplete="email"
              required
            />
            <div className={styles.passwordRow}>
              <div>
                <label htmlFor="auth-password">Пароль</label>
                <div className={styles.passwordField}>
                  <input
                    id="auth-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Мінімум 8 символів"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    minLength="8"
                    required
                  />
                  <button
                    className={styles.passwordToggle}
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? "Приховати пароль" : "Показати пароль"}
                    aria-pressed={showPassword}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M2.5 12s3.2-6 9.5-6 9.5 6 9.5 6-3.2 6-9.5 6-9.5-6-9.5-6Z" />
                      <circle cx="12" cy="12" r="2.7" />
                    </svg>
                  </button>
                </div>
              </div>
              {!isLogin && (
                <div>
                  <label htmlFor="auth-confirm">Підтвердження</label>
                  <input
                    id="auth-confirm"
                    name="confirmPassword"
                    type="password"
                    placeholder="Повторіть пароль"
                    autoComplete="new-password"
                    minLength="8"
                    required
                  />
                </div>
              )}
            </div>
            {!isLogin && (
              <label className={styles.consent}>
                <input type="checkbox" name="consent" required />
                <span>Погоджуюся з умовами використання та політикою конфіденційності.</span>
              </label>
            )}
            <button type="submit">
              {isLogin ? "Увійти" : "Зареєструватися"} <span aria-hidden="true">↗</span>
            </button>
            <p className={styles.signIn}>
              {isLogin ? "Ще не маєте акаунта?" : "Уже маєте акаунт?"}{" "}
              <button
                className={styles.authToggle}
                onClick={() => onSwitchMode(isLogin ? "registration" : "login")}
                type="button"
              >
                {isLogin ? "Зареєструватися" : "Увійти"}
              </button>
            </p>
          </form>
        </div>
        <aside className={styles.visual}>
          <span className={styles.visualEyebrow}>AUTOSOFT / CLIENT SPACE</span>
          <div className={styles.visualCenter}>
            <span>a</span>
            <small>
              BUSINESS
              <br />
              IN FLOW
            </small>
          </div>
          <div className={styles.visualQuote}>
            «Технології мають
            <br />
            працювати на вас.»
          </div>
          <span className={styles.visualFoot}>ПРОСТІШЕ ПРАЦЮВАТИ. ЛЕГШЕ ЗРОСТАТИ.</span>
        </aside>
      </section>
    </div>
  );
}
