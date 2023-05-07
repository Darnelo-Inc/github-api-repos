import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LS_FAVS = "LS_FAVS"

interface FavsState {
  favs: string[]
}

const initialState: FavsState = {
  favs: JSON.parse(localStorage.getItem(LS_FAVS) ?? "[]"),
}

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<string>) => {
      state.favs.push(action.payload)
      localStorage.setItem(LS_FAVS, JSON.stringify(state.favs))
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.favs = state.favs.filter((fav) => fav !== action.payload)
      localStorage.setItem(LS_FAVS, JSON.stringify(state.favs))
    },
  },
})

export default favsSlice.reducer
export const { addFav, removeFav } = favsSlice.actions
