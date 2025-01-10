import { createSlice } from "@reduxjs/toolkit";
import { listeTuto } from "./data";

const tutoSlice = createSlice({
  name: "tuto",
  initialState: {
    list: listeTuto,
  },
  reducers: {
    supprimerTuto: (state, action) => {
      state.list = state.list.filter((tuto) => tuto.code !== Number(action.payload)
      );
    },
    modifierTuto: (state, action) => {
      const trouvé = state.list.find((tuto) => tuto.code === Number(action.payload.code)
      );
      if (trouvé) {
        trouvé.titre = action.payload.titre;
        trouvé.description = action.payload.description;
      }
    },
    nouveauTuto: (state, action) => {
      state.list.push(action.payload);
    },
  },
});
export const { supprimerTuto, modifierTuto, nouveauTuto } = tutoSlice.actions;
export default tutoSlice.reducer;
