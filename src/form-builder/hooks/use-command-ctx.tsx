import { createSafeContext } from '@/form-builder/libs/create-safe-context';
import * as React from 'react';

type CommandCtx = {
  openCommand: boolean;
  setOpenCommand: React.Dispatch<React.SetStateAction<boolean>>;
};

const [CommandProv, useCommand] = createSafeContext<CommandCtx>(
  'useCommand must be used within a CommandProv provider',
);

const CommandProvider = ({ children }: { children: React.ReactNode }) => {
  const [openCommand, setOpenCommand] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }
      if (e.key === 'f') {
        e.preventDefault();
        setOpenCommand((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return (
    <CommandProv value={{ openCommand, setOpenCommand }}>
      {children}
    </CommandProv>
  );
};

export { CommandProvider, useCommand };
