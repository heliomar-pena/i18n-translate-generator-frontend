"use client"
import ConfigSection from './components/config-section'
import MainSection from './components/main-section'
import NewLangCMDSection from './components/new-lang-cmd-section'
import TranslateCMDSection from './components/translate-cmd-section'
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection />
      <section className={styles.sections}>
        <ConfigSection />
        <TranslateCMDSection />
        <NewLangCMDSection />
      </section>
    </main>
  )
}
