import { configureStore } from "@reduxjs/toolkit"
import { githubApi } from "./API/githubAPI"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: { [githubApi.reducerPath]: githubApi.reducer },
  middleware: (getDefMid) => getDefMid().concat(githubApi.middleware),
})

setupListeners(store.dispatch)
