import { create } from 'zustand'

type Loading = {
    isAsking: boolean,
    startAsking: () => void,
    stopAsking: () => void,
}

export const useAskToSub = create<Loading>((set) => ({
    isAsking: false,
    startAsking: () => set((state) => ({ isAsking: true })),
    stopAsking: () => set((state) => ({ isAsking: false })),
}));