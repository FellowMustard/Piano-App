import { MdOutlinePiano } from "react-icons/md";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <nav className={styles.pageNav}>
        <div className={styles.logoNav}>
          <MdOutlinePiano className={styles.logoPiano} />
          <span>Zeephiano</span>
        </div>
      </nav>
      <section className={styles.pianoSection}>
        <div className={styles.piano}>
          <div className={styles.pianoWhite}></div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}></div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}></div>
          <div className={styles.pianoWhite}></div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}></div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}></div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}></div>
        </div>
      </section>
    </main>
  );
}
