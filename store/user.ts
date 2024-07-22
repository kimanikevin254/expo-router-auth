import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUser {
    name: string
}

interface IUserState {
    user: IUser | null;
    setUser: (userData: IUser) => void;
    removeUser: () => void;

    _hasHydrated: boolean;
    setHasHydrated: (state: boolean) => void
}

export const useUserStore = create<IUserState>()(
    persist(
        (set, get) => ({
            user: null,

            setUser: (userData) => set({ user: userData }),
            removeUser: () => set({ user: null }),

            // Track store hydration since we're using async storage
            _hasHydrated: false,
            setHasHydrated: (state) => {
                set({
                  _hasHydrated: state
                });
            },
        }), 
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                state?.setHasHydrated(true)
            },
        }
    )
)