import styles from './header.module.css'
import { Translate, CaretDown } from '@/assets/phosphorIcons'

export default function Header() {
  return (
    <nav className={styles.main}>
      <div className={styles.title}>
        I18n Translate Generator
      </div>
      <ul className={styles.actionButtons}>
        <li>Documentation</li>
        <li>NPM</li>
        <li>GitHub</li>
        <li>
          <button>
            <Translate size={24} /><CaretDown/>
          </button>
        </li>
      </ul> 
    </nav>
  )
}
