import Container from "@/shared/ui/Container/Container";
import Booking from "@/components/Booking/Booking";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Container>
        <Booking />
      </Container>
    </main>
  );
}
