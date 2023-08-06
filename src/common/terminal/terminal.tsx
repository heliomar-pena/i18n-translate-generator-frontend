import CommandLine from './components/command-line';
import CommandOutput from './components/command-output';
import styles from './terminal.module.css';
import { B612_Mono } from 'next/font/google';

const b612Mono = B612_Mono({ weight: "400", subsets: ["latin"] });

type command = {
  text: string;
  name?: string;
  system?: string;
  path?: string;
}

export type oldCommand = {
  command: command;
  output?: string;
}

interface TerminalProps {
  oldCommands?: oldCommand[];
  currentCommand?: string;
  currentPath?: string;
  currentSystem?: string;
  currentName?: string;
  className?: string;
}

export default function Terminal({ oldCommands, currentCommand = '', currentPath, currentSystem, currentName, className }: TerminalProps) {
  return (
    <div className={`${styles.terminal} ${b612Mono.className} ${className ? className : ''}`}>
      {
        oldCommands?.map((oldCommand, index) => { 
          return (
            <>
              <CommandLine 
                key={`CommandLine-${index}`}
                command={oldCommand.command.text}
                name={oldCommand.command.name}
                system={oldCommand.command.system}
                path={oldCommand.command.path}
              />
              {
                oldCommand.output &&
                <CommandOutput 
                  key={`CommandOutput-${index}`}
                  output={oldCommand.output}
                />
              }
            </>
          )
        })
      }
      <CommandLine
        command={currentCommand}
        name={currentName}
        system={currentSystem}
        path={currentPath}
      />
    </div>
    )
}
