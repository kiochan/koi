'use client';

import { useModalStore } from '@koi/editor-web-ui/stores/modal-store';
import { Button } from '../ui/button';
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '../ui/dialog';
import { isValidElement, useCallback, useMemo } from 'react';

export function AppModal() {
  const { open, data, closeModal } = useModalStore((state) => state);

  const title = useMemo(
    () => (data?.title ? <DialogTitle>{data?.title}</DialogTitle> : null),
    [data]
  );

  const content = useMemo(() => data?.content ?? null, [data]);

  const description = useMemo(
    () =>
      data?.description ? (
        <DialogDescription>DialogDescription</DialogDescription>
      ) : null,
    [data]
  );
  const footerElements = useMemo(() => data?.footerElements ?? null, [data]);

  const createTrigger = useCallback(() => {
    if (isValidElement(data?.trigger)) {
      return <DialogTrigger asChild> {data?.trigger}</DialogTrigger>;
    }
    if (typeof data?.trigger === 'string') {
      return <DialogTrigger asChild> {data?.trigger}</DialogTrigger>;
    }
    return null;
  }, [data]);

  const createCloseButton = useCallback(() => {
    if (data?.closeContent === undefined) {
      return (
        <Button type="button" variant="secondary">
          Close
        </Button>
      );
    }
    if (typeof data?.closeContent === 'string') {
      return (
        <Button type="button" variant="secondary">
          {data?.closeContent}
        </Button>
      );
    }
    if (isValidElement(data?.closeContent)) {
      return data.closeContent;
    }
    return null;
  }, [data]);

  return (
    <Dialog open={open} onOpenChange={() => closeModal()}>
      <form>
        {createTrigger()}
        <DialogContent>
          <DialogHeader>
            {title}
            {description}
          </DialogHeader>
          {content}
          <DialogFooter>
            <DialogClose asChild>{createCloseButton()}</DialogClose>
            {footerElements}
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
