import { create } from "zustand";

const useStore = create((set) => ({
  components: [],
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id !== id),
    })),
  clearCalculator: () => set({ components: [] }),
}));

export default useStore;
