import styles from "./ConfirmationScreen.module.css";

const ConfirmationScreen = () => {
  return (
    <section className={styles.confirmation}>
      <div className={styles.icon}>✓</div>

      <h2 className={styles.title}>Бронирование подтверждено</h2>

      <p className={styles.subtitle}>
        Спасибо! Ваш столик успешно забронирован.
      </p>

      <div className={styles.details}>
        <div>
          <span>Имя</span>
          <strong>Пашаев Джабир</strong>
        </div>

        <div>
          <span>Дата</span>
          <strong>10 сентября 2026</strong>
        </div>

        <div>
          <span>Время</span>
          <strong>19:00</strong>
        </div>

        <div>
          <span>Количество гостей</span>
          <strong>4</strong>
        </div>
      </div>

      <button type="button">Забронировать ещё</button>
    </section>
  );
};

export default ConfirmationScreen;
