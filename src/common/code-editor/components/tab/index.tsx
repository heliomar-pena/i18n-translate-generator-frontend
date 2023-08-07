import styles from './tab.module.css';
import { BracketsCurly } from '@/assets/phosphorIcons';

type tabProps = {
    name?: string,
    onClick?: () => void,
}

export default function Tab ({ name, onClick = () => {} }: tabProps) {
    return (
        <div className={styles.tab} onClick={onClick}>
            <BracketsCurly className={styles.tabIcon} size={16} />
            <span>{name}</span>
        </div>
    )
}