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

    const startAnimationLoop = async (steps: {func: () => Promise<string>, translationAdded: string}[]) => {
        for await (const step of steps) {
            const command = await step.func();
            
            await new Promise((res, rej) => {
                const allTranslations = [...TranslationsMock];

                const interval = setInterval(() => {
                    const translation = allTranslations.shift()
                    
                    if (translation) {
                        const translationToAdd = translation?.content[step.translationAdded];

                        setEditorFiles((prev) => {
                            const file = prev.find((file) => file.name === translation.name);

                            if (file) return prev.map((prevFile) => prevFile.name === translation.name ? { ...prevFile, content: { ...prevFile.content, [step.translationAdded]: translationToAdd }, lastUpdated: new Date() } : prevFile)
                            else return [...prev, { ...translation, content: { [step.translationAdded]: translationToAdd }, lastUpdated: new Date() }]
                        });
                    } else {
                        execute({ customCommand: command, output: 'Translation added successfully' });
                        clearInterval(interval);
                        res(command);
                    }
                }, 1000)
            });            
        }
    }

    const secondStep = async () => {
        return await write('npx i18n-translate-generator translate "Welcome to i18n-translate-generator" "en" "welcome"')
    }

    const firstStep = async () => {
        return await write('npx i18n-translate-generator translate "Hello world" "en" "greetings"');
    }

    useEffect(() => {
        startAnimationLoop([
            {func: firstStep, translationAdded: 'greetings'},
            {func: secondStep, translationAdded: 'welcome'}
        ])
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