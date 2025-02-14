import { create } from "zustand";

const useCalculatorStore = create((set) => ({
  components: [], // Stores buttons added to the calculator
  expression: "", // Stores the input expression
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (index) =>
    set((state) => ({
      components: state.components.filter((_, i) => i !== index),
    })),
  updateExpression: (value) =>
    set((state) => ({ expression: state.expression + value })),
  clearExpression: () => set({ expression: "" }),
  evaluateExpression: () =>
    set((state) => {
      try {
        return { expression: eval(state.expression).toString() };
      } catch {
        return { expression: "Error" };
      }
    }),
}));

export default useCalculatorStore;
