import styles from './tabs.module.css';

type TabsProps = {
    children: React.ReactNode[]
}

export default function Tabs({ children }: TabsProps) {
    return (
        <div className={styles.tabs}>
            {children}
        </div>
    )
}