"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "@/schemas/bookingSchema";
import type { BookingFormData } from "@/types/booking";

import styles from "./BookingForm.module.css";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
  };

  return (
    <section className={styles.bookingForm}>
      <h1 className={styles.title}>Бронирование столика</h1>
      <p className={styles.subtitle}>
        Выберите удобное время и заполните форму
      </p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label htmlFor="name">
            Имя <span className={styles.required}>*</span>
          </label>
          <input
            className={`${styles.control} ${errors.name ? styles.inputError : ""}`}
            id="name"
            type="text"
            placeholder="Иван Иванов"
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="phone">
            Телефон <span className={styles.required}>*</span>
          </label>
          <input
            className={`${styles.control} ${errors.phone ? styles.inputError : ""}`}
            id="phone"
            type="tel"
            placeholder="+7 999 123-45-67"
            {...register("phone")}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="date">
            Дата <span className={styles.required}>*</span>
          </label>
          <input
            className={`${styles.control} ${errors.date ? styles.inputError : ""}`}
            id="date"
            type="date"
            {...register("date")}
          />
          {errors.date && (
            <span className={styles.error}>{errors.date.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="time">
            Время <span className={styles.required}>*</span>
          </label>
          <select
            className={`${styles.control} ${errors.time ? styles.inputError : ""}`}
            id="time"
            {...register("time")}
          >
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
          {errors.time && (
            <span className={styles.error}>{errors.time.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="guests">
            Количество гостей <span className={styles.required}>*</span>
          </label>
          <input
            className={`${styles.control} ${errors.guests ? styles.inputError : ""}`}
            id="guests"
            type="number"
            min="1"
            max="12"
            {...register("guests", { valueAsNumber: true })}
          />

          {errors.guests && (
            <span className={styles.error}>{errors.guests.message}</span>
          )}
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
