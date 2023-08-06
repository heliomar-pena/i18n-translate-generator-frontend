"use client"
import { useState } from "react";
import { oldCommand } from "../terminal";

export type useTerminalProps = {
    command?: string;
    path?: string;
    system?: string;
    name?: string;
    oldCommands?: oldCommand[];
}

const useTerminal = (config?: useTerminalProps) => {
    const [command, setCommand] = useState(config?.command || '');
    const [path, setPath] = useState(config?.path || '');
    const [system, setSystem] = useState(config?.system || '');
    const [name, setName] = useState(config?.name || '');
    const [oldCommands, setOldCommands] = useState<oldCommand[]>(config?.oldCommands || []);

    const write = (command: string, cb: () => void) => {
        const commandByChars = command.split('');
        const interval = setInterval(() => {
            if (commandByChars.length) {
                setCommand((prev) => prev + commandByChars.shift());
            } else {
                clearInterval(interval);
                cb();
            }
        }, 200);
    };

    /**
     * Removes all the text from the terminal including path, system, user name and output
     */
    const clear = () => {
        setCommand('');
        setPath('');
        setSystem('');
        setName('');
    };

    /**
     * Saves the current command in history with their output and clears the terminal
     * @param output - The output of the current command
     */
    const execute = (output?: string) => {
        setOldCommands([...oldCommands, {
            command: {
                text: command,
                name,
                system,
                path
            },
            output
        }]);
        setCommand('');
    }

    const addOutputToLastCommand = (output: string) => {
        const lastCommand = oldCommands[oldCommands.length - 1];
        lastCommand.output = output;
        setOldCommands([...oldCommands]);
    }

    return {
        command,
        path,
        system,
        name,
        oldCommands,
        write,
        clear,
        execute,
        addOutputToLastCommand,
        setPath,
        setSystem,
        setName
    };
}

export default useTerminal;