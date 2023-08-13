"use client"
import ConfigSection from './components/config-section'
import MainSection from './components/main-section'
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
      <section className={styles.sections}>
        <ConfigSection />
      </section>
    </main>
  )
}
