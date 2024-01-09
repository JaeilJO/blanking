import { create } from 'zustand';

type InitialState = { status: 'loading' | 'success' | 'error' | 'none'; message: string };
type SetState = {
    loading: (message: string) => void;
    success: (message: string) => void;
    error: (message: string) => void;
    reset: () => void;
};
export const useAlertStore = create<InitialState & SetState>((set) => ({
    status: 'none',
    message: '',

    loading: (message: string) => set(() => ({ status: 'loading', message: message })),
    success: (message: string) => set(() => ({ status: 'success', message: message })),
    error: (message: string) => set(() => ({ status: 'error', message: message })),
    reset: () => set(() => ({ status: 'none', message: '' })),
}));
