'use client';

import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import { ReactNode } from 'react';

export type ModalState = {
  open: boolean;
  data: ModalInput | null;
  openModal: (data: ModalInput) => void;
  closeModal: () => void;
};

export interface ModalInput {
  title: string;
  trigger?: ReactNode | string;
  content?: ReactNode | string;
  description?: string;
  closeContent?: ReactNode | string | null;
  footerElements?: ReactNode;
}

export const modalStore = createStore<ModalState>((set) => ({
  open: false,
  data: null,
  openModal: (input: ModalInput) => set({ open: true, data: input }),
  closeModal: () => set({ open: false }),
}));

export const useModalStore = <T>(selector: (state: ModalState) => T) =>
  useStore(modalStore, selector);
