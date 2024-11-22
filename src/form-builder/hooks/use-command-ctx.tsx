import { createSafeContext } from '@/form-builder/libs/create-safe-context';
import * as React from 'react';
import { SetTemplate } from '../form-types';

type CommandCtx = {
  openCommand: boolean;
  setOpenCommand: React.Dispatch<React.SetStateAction<boolean>>;
  setTemplate: SetTemplate;
};

const [CommandProv, useCommand] = createSafeContext<CommandCtx>(
  'useCommand must be used within a CommandProv provider',
);

const CommandProvider = ({
  children,
  setTemplate,
}: {
  children: React.ReactNode;
  setTemplate: SetTemplate;
}) => {
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
    <CommandProv value={{ openCommand, setOpenCommand, setTemplate }}>
      {children}
    </CommandProv>
  );
};

export { CommandProvider, useCommand };
