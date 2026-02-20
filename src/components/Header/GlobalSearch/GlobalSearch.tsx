import { useState } from 'react';
import { VisuallyHidden } from 'radix-ui';
import { SearchInput } from '../../ui/input/SearchInput';
import { SearchDialogContent } from './SearchDialogContent';
import { Dialog, DialogContent, DialogTitle } from '../../ui/Dialog.tsx';

export const GlobalSearch = ({ onSelect }: { onSelect?: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        className="w-full cursor-text"
        onClick={() => setOpen(true)}
      >
        <SearchInput
          value=""
          placeholder="Find a book or author"
          readOnly
        />
      </div>

      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogContent
          className="p-0 border-none bg-white shadow-2xl sm:max-w-[650px] top-[10%] translate-y-0 rounded-2xl overflow-hidden"
          showCloseButton={false}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <VisuallyHidden.Root>
            <DialogTitle>Search Books</DialogTitle>
          </VisuallyHidden.Root>

          {open && (
            <SearchDialogContent
              onClose={() => setOpen(false)}
              onSelect={onSelect}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
