import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { favsSlice } from "../store/reducers/favsSlice"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

const actions = {
  ...favsSlice.actions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}

// export const useAppDispatch: AppDispatch = useDispatch()
