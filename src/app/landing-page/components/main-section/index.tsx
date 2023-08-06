import useTerminal from "@/common/terminal/utils/useTerminal";
import { useEffect } from "react";
import styles from "./main-section.module.css";
import Terminal from "@/common/terminal";

export default function MainSection() {
    const { 
        command,
        path,
        system,
        name,
        oldCommands,
        write,
        clear,
        execute,
        addOutputToLastCommand,
        setPath,
        setSystem,
        setName
    } = useTerminal();

    useEffect(() => {
        write('npx i18n-translate-generator translate "Hello world" "en" "greetings"', () => {
        console.log('callback!');
        });
    }, []);

    return (
        <section className={styles.mainSection}>
            <h1 className={styles.title}>
                Translate effortlessly to multiple languages with just one command. Reach a global audience with ease and save valuable time.
            </h1>
            <p className={styles.description}>Translate easily between different languages with only one CLI command</p>
            <Terminal
                oldCommands={oldCommands}
                currentCommand={command}
                currentPath={path}
                currentSystem={system}
                currentName={name}
                />
        </section>
    )
}