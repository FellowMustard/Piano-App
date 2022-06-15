import { MdOutlinePiano } from "react-icons/md";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [pianoActive, setPianoActive] = useState(false);
  const pianoClick = () => {
    setPianoActive(true);
  };
  const pianoLeave = () => {
    setPianoActive(false);
  };
  const pianoKeysReact = (keys, leave = false) => {
    if (pianoActive) {
      console.log(keys);
      if (leave) {
        console.log(keys + " leave");
      }
    }
  };
  return (
    <main className={styles.mainContainer}>
      <nav className={styles.pageNav}>
        <div className={styles.logoNav}>
          <MdOutlinePiano className={styles.logoPiano} />
          <span>Zeephiano</span>
        </div>
      </nav>
      <section className={styles.pianoSection}>
        <div
          className={styles.piano}
          onClick={() => pianoClick()}
          onMouseDown={() => pianoClick()}
          onMouseUp={() => pianoLeave()}
          onMouseLeave={() => pianoLeave()}
        >
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("C")}
              onMouseLeave={() => pianoKeysReact("C", true)}
            >
              C
            </span>
          </div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("D")}
              onMouseLeave={() => pianoKeysReact("D", true)}
            >
              D
            </span>
          </div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("E")}
              onMouseLeave={() => pianoKeysReact("E", true)}
            >
              E
            </span>
          </div>
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("F")}
              onMouseLeave={() => pianoKeysReact("F", true)}
            >
              F
            </span>
          </div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("G")}
              onMouseLeave={() => pianoKeysReact("G", true)}
            >
              G
            </span>
          </div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("A")}
              onMouseLeave={() => pianoKeysReact("A", true)}
            >
              A
            </span>
          </div>
          <div className={styles.pianoBlack}></div>
          <div className={styles.pianoWhite}>
            <span
              className={styles.pianoKeysName}
              onMouseEnter={() => pianoKeysReact("B")}
              onMouseLeave={() => pianoKeysReact("B", true)}
            >
              B
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
