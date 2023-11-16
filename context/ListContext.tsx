"use client"

import { createContext, useReducer } from "react"
import type { Dispatch } from "react"
import removeEmptyKeys from "@/utils/removeEmptyKeys"

import type { TypeData, TypeItem } from "@/types"

interface TypeNewItem extends Omit<TypeItem, "id"> {}

type ActionType =
  | {
      type: "addItem"
      payload: TypeNewItem
    }
  | {
      type: "updateList"
    }
  | {
      type: "clearList"
    }
  | {
      type: "updateFilters"
      payload: TypeData["filters"]
    }
  | {
      type: "removeItem"
      payload: string
    }

export const ListContext = createContext<{
  data: TypeData
  dispatch: Dispatch<ActionType>
}>({ data: { filters: {}, list: [] }, dispatch: () => [] })

const initialState: TypeData = { filters: {}, list: [] }

const generateId = (): string => {
  const storedId = window.localStorage.getItem("item-id")

  const id = typeof storedId === "string" ? `${parseInt(storedId) + 1}` : "0"

  window.localStorage.setItem("item-id", id)

  return id
}

function reducer(state: TypeData, action: ActionType): TypeData {
  switch (action.type) {
    case "updateList":
      return {
        ...state,
        list:
          typeof window.localStorage.getItem("expenses-list") === "string"
            ? JSON.parse(window.localStorage.getItem("expenses-list") as string)
            : [],
      }
    case "addItem": {
      const newItem = { ...action.payload, id: generateId() }
      const updatedList = [newItem, ...state.list]
      window.localStorage.setItem("expenses-list", JSON.stringify(updatedList))
      return { ...state, list: updatedList }
    }
    case "removeItem": {
      const updatedList = state.list.filter(
        (elem) => elem.id !== action.payload
      )
      window.localStorage.setItem("expenses-list", JSON.stringify(updatedList))
      return { ...state, list: updatedList }
    }
    case "updateFilters": {
      const updatedFilter = { ...state.filters, ...action.payload }
      return { ...state, filters: removeEmptyKeys(updatedFilter) }
    }
    case "clearList": {
      if (window.confirm("Clear list?")) {
        window.localStorage.removeItem("expenses-list")
        window.localStorage.removeItem("item-id")
        return { ...state, list: [] }
      }
      return state
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
  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <ListContext.Provider value={{ data, dispatch }}>
      {children}
    </ListContext.Provider>
  )
}
