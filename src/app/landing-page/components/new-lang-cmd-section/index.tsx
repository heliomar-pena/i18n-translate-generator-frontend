import styles from "./new-lang-cmd-section.module.css"; 
import CodeEditor from "@/common/code-editor/code-editor";
import Terminal from "@/common/terminal";
import useTerminal from "@/common/terminal/utils/useTerminal";
import { useEffect, useState } from "react";
import TranslationsMock from "@/assets/translations.mock";

export default function NewLangCMDSection() {
    const [editorFiles, setEditorFiles] = useState([TranslationsMock.find(translation => translation.name === 'en.json') || TranslationsMock[0]]);

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
        write('npx i18n-translate-generator new-lang --base "en.json" --target "jp.json"').then((command) => {
            setEditorFiles((prev) => [...prev, {
                name: 'jp.json',
                path: ["translations", "i18n"],
                content: {
                    greetings: "こんにちは世界！",
                    welcome: "i18n-translate-generator へようこそ",
                }
            }]);
            execute({ customCommand: command, output: 'Translation generated successfully!' })
        });
    }, [])

    return (
        <section className={styles.translateSection}>
            <h1 className={styles.title}>
                Add new languages easily to your project with the new-lang command
            </h1>
            <div className={styles.demoContainer}>
                <Terminal
                    currentCommand={command}
                    currentName={name}
                    currentPath={path}
                    currentSystem={system}
                    oldCommands={oldCommands}
                />
                <CodeEditor isClickable files={editorFiles} />
            </div>
        </section>
    )
}