"use client"
import { ListContext } from "@/context/ListContext"
import { useState, type FormEvent, useRef, useContext } from "react"
import { Enter } from "@/components/icons"
import CardBorder from "@/components/CardBorder"

import styles from "./styles.module.css"

const CATEGORIES = [
  "other",
  "recreation",
  "taxes",
  "market",
  "health",
  "suscriptions",
  "cuotas",
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
    <CardBorder tag="section" maxWidth="1000px" className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <fieldset>
          <input
            className={styles.rowStart}
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ref={valueRef}
            placeholder="Description"
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            type="number"
            name="value"
            step="0.01"
            value={value}
            placeholder="Value"
            onChange={(e) => setValue(e.target.value)}
          />
        </fieldset>
        <fieldset>
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
        </fieldset>
        <fieldset>
          <input
            className={styles.rowEnd}
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </fieldset>
        <fieldset className={styles.submitContainer}>
          <button type="submit" className={styles.submit}>
            add item <Enter width={20} height={20} />
          </button>
        </fieldset>
      </form>
    </CardBorder>
  )
}
