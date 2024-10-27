import { create } from 'zustand';

interface State {
  search: string;
  setSearch: (search: string) => void;
}

export const useStore = create<State>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));
