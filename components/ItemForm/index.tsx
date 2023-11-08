"use client"
import { ListContext } from "@/context/ListContext"
import { useState, type FormEvent, useRef, useContext } from "react"

const CATEGORIES = [
  "other",
  "recreation",
  "taxes",
  "market",
  "health",
  "suscriptions",
]

export default function ItemForm(): JSX.Element {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("other")
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))

  const { dispatch } = useContext(ListContext)

  const valueRef = useRef<HTMLInputElement>(null)

  const resetForm = (): void => {
    setDescription("")
    setValue("")
    setCategory("other")
    setDate(new Date().toISOString().substring(0, 10))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const newItem = {
      description,
      value,
      date,
      category,
    }

    dispatch({ type: "addItem", payload: newItem })

    valueRef?.current?.focus()
    resetForm()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={valueRef}
        autoFocus
      />
      <input
        type="number"
        name="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          )
        })}
      </select>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">add item</button>
    </form>
  )
}
