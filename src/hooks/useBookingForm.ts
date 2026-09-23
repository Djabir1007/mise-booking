import { bookingSchema } from "@/schemas/bookingSchema";
import { BookingFormData } from "@/types/booking";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useBookingForm = () => {
  return useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onBlur",
  });
};
