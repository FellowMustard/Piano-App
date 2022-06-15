import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <nav className={styles.pageNav}>
        <div className={styles.logoNav}>Zeephiano</div>
      </nav>
    </main>
  );
}
