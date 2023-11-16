"use client"

import { createContext, useReducer } from "react"
import type { Dispatch } from "react"

import Toast from "@/components/Toast"
import type { TypeToast } from "@/types"

interface TypeNewToast extends Omit<TypeToast, "key"> {}

type ActionType =
  | {
      type: "addToast"
      payload: TypeNewToast
    }
  | {
      type: "removeToast"
      payload: string
    }

export const ToastContext = createContext<{
  data: TypeToast[]
  dispatch: Dispatch<ActionType>
}>({ data: [], dispatch: () => [] })

const initialState: TypeToast[] = []

const generateKey = (): string => {
  const storedKey = window.localStorage.getItem("toast-key")

  const key = typeof storedKey === "string" ? `${parseInt(storedKey) + 1}` : "0"

  window.localStorage.setItem("toast-key", key)

  return key
}

function reducer(state: TypeToast[], action: ActionType): TypeToast[] {
  switch (action.type) {
    case "addToast":
      return [...state, { ...action.payload, key: generateKey() }]
    case "removeToast":
      return state.filter((elem) => elem.key !== action.payload)
    default:
      return state
  }
}

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <ToastContext.Provider value={{ data, dispatch }}>
      <Toast />
      {children}
    </ToastContext.Provider>
  )
}
