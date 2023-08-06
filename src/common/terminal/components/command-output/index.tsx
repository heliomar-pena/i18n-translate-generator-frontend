import styles from './command-output.module.css';

export interface CommandOutputProps {
    output: string;
}

export default function CommandOutput ({ output }: CommandOutputProps) {
    return (
    <div className={styles.commandOutput}>
        <span className={styles.output}>{output}</span>
    </div>
    )
}