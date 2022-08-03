export const initialState = {
  // Tema initiala este deschisa
  theme: "light",
};

export function themeReducer(state, action) {
  //Schimbam tema in functie de tipul actiunii
  switch (action.type) {
    case "LIGHT": {
      return {
        theme: "light",
      };
    }
    case "DARK": {
      return {
        theme: "dark",
      };
    }
    default: {
      return state;
    }
  }
}
