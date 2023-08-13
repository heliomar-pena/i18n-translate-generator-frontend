import { File } from "@/common/code-editor/code-editor";

const i18nTgConfigMock: File = {
    name: "i18n-auto-translate.config.json",
    path: [],
    content: {
        basePath: "translations/i18n",
        languages: [
            {
                name: "en",
                files: [
                    "en.json"
                ]
            },
            {
                name: "de",
                files: [
                    "de.json"
                ]
            },
            {
                name: "fr",
                files: [
                    "fr.json"
                ]
            }
        ]
    }
}

export default i18nTgConfigMock;