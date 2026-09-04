import styles from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <section className={styles.bookingForm}>
      <h1 className={styles.title}>Бронирование столика</h1>
      <p className={styles.subtitle}>
        Выберите удобное время и заполните форму
      </p>

      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">
            Имя <span className={styles.required}>*</span>
          </label>
          <input id="name" type="text" placeholder="Иван Иванов" />
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">
            Телефон <span className={styles.required}>*</span>
          </label>
          <input id="phone" type="tel" placeholder="+7 999 123-45-67" />
        </div>

        <div className={styles.field}>
          <label htmlFor="date">
            Дата <span className={styles.required}>*</span>
          </label>
          <input id="date" type="date" />
        </div>

        <div className={styles.field}>
          <label htmlFor="time">
            Время <span className={styles.required}>*</span>
          </label>
          <select id="time">
            <option value="">Выберите время</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="guests">
            Количество гостей <span className={styles.required}>*</span>
          </label>
          <input id="guests" type="number" min="1" max="12" />
          <span className={styles.hint}>
            Доступно для бронирования: 1–12 гостей
          </span>
        </div>

        <button type="submit">Забронировать</button>
      </form>
    </section>
  );
};

export default BookingForm;
