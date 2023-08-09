import useTerminal from "@/common/terminal/utils/useTerminal";
import { useEffect, useState } from "react";
import styles from "./main-section.module.css";
import Terminal from "@/common/terminal";
import CodeEditor from "@/common/code-editor/code-editor";
import TranslationsMock from "@/assets/translations.mock";
import i18nTgConfigMock from "@/assets/i18n-tg-config.mock";

export default function MainSection() {
    const [editorFiles, setEditorFiles] = useState([i18nTgConfigMock]);

    const { 
        command,
        path,
        system,
        name,
        oldCommands,
        write,
        execute,
    } = useTerminal();

    const secondStep = () => {
        write('npx i18n-translate-generator translate "Welcome to i18n-translate-generator" "en" "welcome"', (command) => {
            const translations = [...TranslationsMock];
            const interval = setInterval(() => {
                const currentTranslation = translations.shift();
                
                if (currentTranslation) {
                    const { welcome } = currentTranslation.content;
               
                    setEditorFiles((prev) => prev.map((prevFile) => prevFile.name === currentTranslation.name ? { ...prevFile, content: { ...prevFile.content, welcome }, lastUpdated: new Date() } : prevFile));
                } else {
                    execute({ customCommand: command, output: 'Translations generated successfully' });
                    clearInterval(interval);
                }
            }, 1000)
        })
    }

    const firstStep = () => {
        write('npx i18n-translate-generator translate "Hello world" "en" "greetings"', (command) => {
            const translations = [...TranslationsMock];
            const interval = setInterval(() => {
                const currentTranslation = translations.shift();
                
                if (currentTranslation) {
                    const { greetings } = currentTranslation.content;
                    
                    setEditorFiles((prev) => [...prev, { ...currentTranslation, content: { greetings }, lastUpdated: new Date() }]);
                } else {
                    execute({ customCommand: command, output: 'Translations generated successfully' });
                    clearInterval(interval);
                    secondStep();
                }
            }, 1000)
        });
    }

    useEffect(() => {
        firstStep();
    }, []);

    return (
        <section className={styles.mainSection}>
            <h1 className={styles.title}>
                Translate effortlessly to multiple languages with just one command. Reach a global audience with ease and save valuable time.
            </h1>
            <p className={styles.description}>Translate easily between different languages with only one CLI command</p>
            <div className={styles.mainExampleContainer}>
                <div>
                    <Terminal
                        className={styles.terminal}
                        oldCommands={oldCommands}
                        currentCommand={command}
                        currentPath={path}
                        currentSystem={system}
                        currentName={name}
                    />
                </div>
                <div>
                    <CodeEditor isClickable files={editorFiles} />
                </div>
            </div>
        </section>
    )
}