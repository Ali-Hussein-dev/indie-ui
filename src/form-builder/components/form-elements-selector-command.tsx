'use client';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import * as React from 'react';
import { formElementsList } from '@/form-builder/constant/form-elements-list';
import { Badge } from '@/components/ui/badge';
import { useCommand } from '@/form-builder/hooks/use-command-ctx';
import { FormElement } from '@/form-builder/form-types';
import useFormBuilderStore from '../hooks/use-form-builder-store';

export function FormElementsSelectorCommand() {
  const appendElement = useFormBuilderStore((s) => s.appendElement);
  const formElements = useFormBuilderStore((s) => s.formElements);
  const isMS = useFormBuilderStore((s) => s.isMS);
  const { openCommand: open, setOpenCommand: setOpen } = useCommand();
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2 text-center">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          {/* <span className="text-xs">⌘</span> */}f
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type form field name..."
          className="max-w-sm"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Fields">
            {formElementsList.map((o) => (
              <CommandItem
                key={o.name}
                onSelect={() => {
                  appendElement({
                    fieldType: o.fieldType as FormElement['fieldType'],
                    stepIndex: isMS ? formElements.length - 1 : undefined,
                  });
                }}
                className="gap-3"
              >
                {o.name}
                {o.isNew && (
                  <Badge className="text-sm py-0 rounded-[2px]">New</Badge>
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
