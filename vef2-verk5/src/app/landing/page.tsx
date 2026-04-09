import Image from 'next/image'
import styles from "../page.module.css";

export default function Page() {
  return <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <p>Text</p>
          <ul>
            <li>1. Forsida(þú ert hér)</li>
            <li>2. listi af efni </li>
            <li>3. submit sida</li>
          </ul>
        </div>
      </main>
    </div>
}