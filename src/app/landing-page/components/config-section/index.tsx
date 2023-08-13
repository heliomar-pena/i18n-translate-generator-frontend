import styles from "./config-section.module.css";
import CodeEditor from "@/common/code-editor/code-editor";
import i18nTgConfigMock from "@/assets/i18n-tg-config.mock";

export default function ConfigSection() {
    return (
        <section className={styles.configSection}>
            <h1 className={styles.title}>
                Get started for free, no API Key or authentication required. Simply create your custom config file and begin translating with ease!
            </h1>
            <div className={styles.codeEditor}>
                <CodeEditor isClickable files={[i18nTgConfigMock]} />
            </div>
        </section>
    )
}