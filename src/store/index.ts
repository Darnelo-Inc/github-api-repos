import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { githubApi } from "./API/githubAPI"
import favsReducer from "./reducers/favsSlice"

export const store = configureStore({
  reducer: { [githubApi.reducerPath]: githubApi.reducer, favs: favsReducer },
  middleware: (getDefMid) => getDefMid().concat(githubApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
