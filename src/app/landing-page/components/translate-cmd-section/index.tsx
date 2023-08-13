import styles from "./translate-cmd-section.module.css";
import CodeEditor from "@/common/code-editor/code-editor";
import Terminal from "@/common/terminal";
import useTerminal from "@/common/terminal/utils/useTerminal";
import { useEffect } from "react";
import TranslationsMock from "@/assets/translations.mock";

export default function TranslateCMDSection() {
    const { 
        command,
        path,
        system,
        name,
        oldCommands,
        write,
        execute,
    } = useTerminal();

    useEffect(() => {
        write('npx i18n-translate-generator translate "Hello world" "en" "greetings"');
    }, [])

    return (
        <section className={styles.translateSection}>
            <h1 className={styles.title}>
                Translate your text to any language with just one command!
            </h1>
            <div className={styles.demoContainer}>
                <Terminal
                    currentCommand={command}
                    currentName={name}
                    currentPath={path}
                    currentSystem={system}
                    oldCommands={oldCommands}
                />
                <CodeEditor isClickable files={TranslationsMock} />
            </div>
        </section>
    )
}