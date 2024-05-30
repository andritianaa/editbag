import { create } from 'zustand'

type Loading = {
    isLoading: boolean,
    startLoading: () => void,
    stopLoading: () => void,
}

export const useLoadingStore = create<Loading>((set) => ({
    isLoading: false,
    startLoading: () => set((state) => ({ isLoading: true })),
    stopLoading: () => set((state) => ({ isLoading: false })),
}));