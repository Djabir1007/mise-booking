import Container from "@/shared/ui/Container/Container";

import styles from "./page.module.css";
import BookingForm from "@/components/BookingForm/BookingForm";

export default function Home() {
  return (
    <main className={styles.page}>
      <Container>
        <BookingForm />
      </Container>
    </main>
  );
}
