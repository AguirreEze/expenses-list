"use client"

import { useState, type FormEvent, useRef, useContext } from "react"
import { ListContext } from "@/context/ListContext"
import { ToastContext } from "@/context/ToastContext"
import { CATEGORIES } from "@/utils/constants"
import { Enter } from "@/components/icons"
import CardBorder from "@/components/CardBorder"

import styles from "./styles.module.css"

export default function ItemForm(): JSX.Element {
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("other")
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10))

  const { dispatch } = useContext(ListContext)
  const { dispatch: dispatchToast } = useContext(ToastContext)

  const valueRef = useRef<HTMLInputElement>(null)

  const resetForm = (): void => {
    setDescription("")
    setValue("")
    setCategory("other")
    setDate(new Date().toISOString().substring(0, 10))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    if (description === "" || value === "") {
      description === "" &&
        dispatchToast({
          type: "addToast",
          payload: { color: "red", message: "Invalid description" },
        })
      value === "" &&
        dispatchToast({
          type: "addToast",
          payload: { color: "red", message: "Invalid value" },
        })
      return
    }

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
        <input
          type="number"
          name="value"
          step="0.01"
          value={value}
          placeholder="Value"
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          name="category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as (typeof CATEGORIES)[number])
          }
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
          className={styles.rowEnd}
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <fieldset className={styles.submitContainer}>
          <button type="submit" className={styles.submit}>
            add item <Enter width={20} height={20} />
          </button>
        </fieldset>
      </form>
    </CardBorder>
  )
}
