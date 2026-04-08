import Image from 'next/image'
import styles from "./page.module.css";

export default function Page() {
  return <div className={styles.page}>
      <main className={styles.main}>
        <Image src="/profile.png" alt="Profile" width={100} height={100} />
        <div className={styles.intro}>
          <h1>Title: Hello, Next.js!</h1> 
          Text: filler
        </div>
      </main>
    </div>
}