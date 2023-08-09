import styles from './tab.module.css';
import { BracketsCurly } from '@/assets/phosphorIcons';

type tabProps = {
    name?: string,
    onClick?: () => void,
    isActive?: boolean
}

export default function Tab ({ name, isActive, onClick = () => {} }: tabProps) {
    return (
        <div className={`${styles.tab} ${isActive ? styles.tabActive : ''}`} onClick={onClick}>
            <BracketsCurly className={styles.tabIcon} size={16} />
            <span>{name}</span>
        </div>
    )
}