import { useEffect, useMemo, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styles from './code-editor.module.css';
import Tab from './components/tab';
import Tabs from './components/tabs';
import { B612_Mono } from 'next/font/google';
import Breadcrumb from './components/breadcrumb';

const b612Mono = B612_Mono({ weight: "400", subsets: ["latin"] });

type FileContent = {
    [key: string]: any
}

export type File = {
    name: string,
    path: string[],
    content: FileContent,
    lastUpdated?: Date
}

type CodeEditorProps = {
    files?: File[],
    isClickable?: boolean,
    className?: string
}

export default function CodeEditor ({ isClickable, files = [] }: CodeEditorProps) {
    const [tabActive, setTabActive] = useState('');

    const parseFileContent = (fileContent: object): string => {
        return JSON.stringify(fileContent, null, 4);
    }

    const handleClick = (tab: string) => {
        if (isClickable) {
            setTabActive(tab);
        }
    }

    const getTabPath = (tab: File) => {
        return tab.path.join('/').concat(`${tab.path.length ? '/' : ''}${tab.name}`);
    }

    const fileActive = useMemo(() => files.find(file => getTabPath(file) === tabActive), [tabActive, files]);

    useEffect(() => {
        const filesHaveLastUpdated = files.some(file => file.lastUpdated);

        if (files.length > 0) {
            if (filesHaveLastUpdated) {
                const lastUpdatedFile = [...files].sort((a, b) => (b.lastUpdated?.getTime() || 0) - (a.lastUpdated?.getTime() || 0))[0]; 
                setTabActive(getTabPath(lastUpdatedFile));
            } else {
                setTabActive(getTabPath(files[files.length - 1]));
            }
        }
    }, [files])
    
    return (
        <div className={b612Mono.className}>
            {files.length > 0 && (  
                <Tabs>
                    {files.map((file, index) => (
                        <Tab isActive={getTabPath(file) === tabActive} name={file.name} key={`${file.name} ${index}`} onClick={() => handleClick(getTabPath(file))} />
                    ))}
                </Tabs>
            )}
            {fileActive && (
                <Breadcrumb name={fileActive.name} path={fileActive.path} />
            )}
            <div className={styles.editorCode}>
                {fileActive && (
                        <SyntaxHighlighter showLineNumbers wrapLongLines language="json" style={stackoverflowDark} customStyle={{ backgroundColor: 'transparent', margin: 0 }}>
                            {parseFileContent(fileActive.content)}
                        </SyntaxHighlighter>
                )}
            </div>
        </div>
    )
}