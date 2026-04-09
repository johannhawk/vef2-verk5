import Image from 'next/image'
import styles from "../page.module.css";

export default function Page() {
  return <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h4>3 hlekkir</h4>
          <ul>
            <li>Hlekk 1. <a href="/landing">Forsida</a></li>
            <li>Hlekk 2. <a href="/list">listi af efni</a></li>
            <li>Hlekk 3. <a href="/submit">submit sida</a></li>
          </ul>
        </div>
      </main>
    </div>
}