"use client";

import { useEffect, useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import type { BookingStatus, BookingFormData } from "@/types/booking";
import ConfirmationScreen from "../ConfirmationScreen/ConfirmationScreen";

const Booking = () => {
  const [status, setStatus] = useState<BookingStatus>("idle");
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);

  const handleBookingSubmit = (data: BookingFormData) => {
    setStatus("loading");
    setBookingData(data);
  };

  const handleResetBooking = () => {
    setStatus("idle");
  };

  useEffect(() => {
    if (status !== "loading") return;

    const timer = setTimeout(() => {
      setStatus("success");
    }, 1500);

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <>
      {status === "idle" || status === "loading" ? (
        <BookingForm
          handleBookingSubmit={handleBookingSubmit}
          status={status}
        />
      ) : (
        bookingData && (
          <ConfirmationScreen
            bookingData={bookingData}
            handleResetBooking={handleResetBooking}
          />
        )
      )}
    </>
  );
};

export default Booking;
