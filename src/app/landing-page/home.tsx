"use client"
import ConfigSection from './components/config-section'
import GetStartSection from './components/get-start-section'
import MainSection from './components/main-section'
import NewLangCMDSection from './components/new-lang-cmd-section'
import TranslateCMDSection from './components/translate-cmd-section'
import styles from './home.module.css'
import background from '../../assets/background.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* <Image src={background} alt='Background image' /> */}
      <main className={styles.main}>
        <MainSection />
        <section className={styles.sections}>
          <ConfigSection />
          <TranslateCMDSection />
          <NewLangCMDSection />
          <GetStartSection />
        </section>
      </main>
      <footer className={styles.footer}>
        Visit the doc to learn more about the project.
      </footer>
    </>
  )
}
