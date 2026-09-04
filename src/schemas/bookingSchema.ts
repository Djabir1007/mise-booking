import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().refine((value) => {
    const allowedCharacters = /^[\d\s()+-]+$/.test(value);

    if (!allowedCharacters) {
      return false;
    }

    const digits = value.replace(/\D/g, "");

    return (
      digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))
    );
  }, "Введите номер в формате +7XXXXXXXXXX"),

  date: z
    .string()
    .min(1, "Выберите дату")
    .refine((value) => {
      const selectedDate = new Date(`${value}T00:00:00`);
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      return selectedDate >= today;
    }, "Дата не может быть раньше сегодняшней"),
  time: z.string().min(1, "Выберите время"),
  guests: z
    .number({ error: "Укажите количество гостей" })
    .min(1, "Минимум 1 гость")
    .max(12, "Максимум 12 гостей"),
});
