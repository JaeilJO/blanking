import { create } from "zustand";

type InitialState = { status: boolean };
type SetState = {
  sidebarStatusHandler: () => void;
};
export const useSideBarStatusStore = create<InitialState & SetState>((set) => ({
  status: true,
  sidebarStatusHandler: () => set((state) => ({ status: !state.status })),
}));
