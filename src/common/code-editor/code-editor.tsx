import styles from './code-editor.module.scss';
import Tab from './components/tab';
import Tabs from './components/tabs';
import { B612_Mono } from 'next/font/google';

const b612Mono = B612_Mono({ weight: "400", subsets: ["latin"] });

type file = {
    name: string,
    path: string[],
    content: string
}

type CodeEditorProps = {
    files?: file[],
    isClickable?: boolean,
    className?: string
}

export default function CodeEditor ({ isClickable, className, files = [] }: CodeEditorProps) {
    return (
        <div className={b612Mono.className}>
            {files.length > 0 && (  
                <Tabs>
                    {files.map((file, index) => (
                        <Tab name={file.name} key={`${file.name} ${index}`} />
                    ))}
                </Tabs>
            )}
        </div>
    )
}