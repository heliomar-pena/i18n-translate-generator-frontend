import { File } from "@/common/code-editor/code-editor";

type FileTranslation = File

const TranslationsMock: FileTranslation[] = [
    {
        name: "en.json",
        path: ["translations", "i18n"],
        content: {
            greetings: "Hello world",
            welcome: "Welcome to i18n-translate-generator"
        }
    },
    {
        name: "de.json",
        path: ["translations", "i18n"],
        content: {
            greetings: "Hallo welt",
            welcome: "Willkommen bei i18n-translate-generator"
        } 
    },
    {
        name: "fr.json",
        path: ["translations", "i18n"],
        content: {
            greetings: "Bonjour le monde",
            welcome: "Bienvenue sur i18n-translate-generator"
        }
    }
]

export default TranslationsMock;