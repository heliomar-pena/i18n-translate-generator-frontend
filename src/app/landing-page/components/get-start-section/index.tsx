import styles from "./get-start-section.module.css";
import CodeEditor from "@/common/code-editor/code-editor";
import i18nTgConfigMock from "@/assets/i18n-tg-config.mock";
import Terminal from "@/common/terminal";

export default function GetStartSection() {
    return (
        <section className={styles.configSection}>
            <h1 className={styles.mainTitle}>
                Get start for free
            </h1>
            <div className={styles.guideSections}>
                <div className={styles.guideSection}>
                    <h1>Basic configuration</h1>
                    <h2>Create a config file on the root of your project, you can based on this template.</h2>
                    <CodeEditor isClickable files={[i18nTgConfigMock]} />
                </div>
                <div className={styles.guideSection}>
                    <h1>Create translates for all your files</h1>
                    <h2>Create your firsts translations with i18n-translation-generator!</h2>
                    <Terminal currentCommand='npx i18n-translate-generator translate "Hello world" "en" "greetings"' />
                </div>
                <div className={styles.guideSection}>
                    <h1>Add new languages to your project easily using new-lang command</h1>
                    <h2>Migrate all your translations from one language to another one with only one command!</h2>
                    <Terminal currentCommand='npx i18n-translate-generator new-lang --base "en.json" --target "jp.json"' />
                </div>  
            </div>
        </section>
    )
}