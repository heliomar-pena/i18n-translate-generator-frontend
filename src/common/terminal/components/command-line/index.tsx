import { useMemo } from 'react';
import styles from './command-line.module.css';

export interface CommandLineProps {
    command: string;
    name?: string;
    system?: string;
    path?: string;
}

export default function CommandLine ({ command, name, system, path }: CommandLineProps) {
    const prefix = useMemo(() => {
        let result = '';
        if (name) result += name;
        if (system) result += name ? `@${system}` : system;
        if (path) result += name || system ? ` ${path}` : path;

        result += "⚬ $ ";
        return result;
    }, [name, path, system])
    
    return (
        <div className={styles.commandLine}>
            <span className={styles.command}>{prefix}{command}</span>
        </div>
    )
};
