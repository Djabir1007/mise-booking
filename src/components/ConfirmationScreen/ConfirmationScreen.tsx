import type { BookingFormData } from "@/types/booking";

import styles from "./ConfirmationScreen.module.css";

type ConfirmationScreenProps = {
  bookingData: BookingFormData;
  handleResetBooking: () => void;
};

const ConfirmationScreen = ({
  bookingData,
  handleResetBooking,
}: ConfirmationScreenProps) => {
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
          <strong>{bookingData.name}</strong>
        </div>

        <div>
          <span>Дата</span>
          <strong>{bookingData.date}</strong>
        </div>

        <div>
          <span>Время</span>
          <strong>{bookingData.time}</strong>
        </div>

        <div>
          <span>Количество гостей</span>
          <strong>{bookingData.guests}</strong>
        </div>
      </div>

      <button type="button" onClick={handleResetBooking}>
        Забронировать ещё
      </button>
    </section>
  );
};

export default ConfirmationScreen;
