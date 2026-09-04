import Container from "@/shared/ui/Container/Container";

import styles from "./page.module.css";
import BookingForm from "@/components/BookingForm/BookingForm";
import ConfirmationScreen from "@/components/ConfirmationScreen/ConfirmationScreen";
import Booking from "@/components/Booking/Booking";

export default function Home() {
  return (
    <main className={styles.page}>
      <Container>
        <Booking />
      </Container>
    </main>
  );
}
