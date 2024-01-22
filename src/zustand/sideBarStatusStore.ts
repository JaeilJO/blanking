import { create } from 'zustand';

type InitialState = { status: boolean };
type SetState = {
    open: () => void;
    close: () => void;
};
export const useSideBarStatusStore = create<InitialState & SetState>((set) => ({
    status: false,

    close: () => set(() => ({ status: true })),
    open: () => set(() => ({ status: false })),
}));
