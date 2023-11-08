"use client"

import { createContext, useReducer } from "react"
import type { Dispatch } from "react"

import type { TypeItem } from "@/types"

interface TypeNewItem extends Omit<TypeItem, "key"> {}

type ActionType =
  | {
      type: "addItem"
      payload: TypeNewItem
    }
  | {
      type: "updateList"
    }

export const ListContext = createContext<{
  list: TypeItem[] | []
  dispatch: Dispatch<ActionType>
}>({ list: [], dispatch: () => [] })

const initialState: TypeItem[] | [] = []

const generateKey = (): string => {
  const storedKey = window.localStorage.getItem("item-key")

  const key = typeof storedKey === "string" ? `${parseInt(storedKey) + 1}` : "0"

  window.localStorage.setItem("item-key", key)

  return key
}

function reducer(state: TypeItem[], action: ActionType): TypeItem[] | [] {
  switch (action.type) {
    case "updateList":
      return typeof window.localStorage.getItem("expenses-list") === "string"
        ? JSON.parse(window.localStorage.getItem("expenses-list") as string)
        : []
    case "addItem": {
      const newItem = { ...action.payload, key: generateKey() }
      const updatedList = [newItem, ...state]
      window.localStorage.setItem("expenses-list", JSON.stringify(updatedList))
      return updatedList
    }
    default:
      return state
  }
}

export default function ListProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [list, dispatch] = useReducer(reducer, initialState)

  return (
    <ListContext.Provider value={{ list, dispatch }}>
      {children}
    </ListContext.Provider>
  )
}
