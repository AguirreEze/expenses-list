"use client"

import { useContext } from "react"

import { CATEGORIES, MONTHS } from "@/utils/constants"
import CardBorder from "@/components/CardBorder"
import Dropdown from "../Dropdown"
import { ListContext } from "@/context/ListContext"

import styles from "./styles.module.css"

export default function Filters(): JSX.Element {
  const { dispatch } = useContext(ListContext)

  return (
    <CardBorder
      className={styles.container}
      tag="section"
      style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}
    >
      <Dropdown title={"Filters"}>
        <form className={styles.form}>
          <div className={styles.hiddenCheckbox}>
            <label>this month</label>
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch({
                  type: "updateFilters",
                  payload: { thisMonth: e.target.checked },
                })
              }
            />
          </div>
          <select
            name="category"
            onChange={(e) =>
              dispatch({
                type: "updateFilters",
                payload: { category: e.target.value },
              })
            }
          >
            <option value={""}>category</option>
            {CATEGORIES.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              )
            })}
          </select>
          <select
            name="category"
            onChange={(e) =>
              dispatch({
                type: "updateFilters",
                payload: { month: e.target.value },
              })
            }
          >
            <option value={""}>month</option>
            {MONTHS.map((category) => {
              return (
                <option value={category} key={category}>
                  {category}
                </option>
              )
            })}
          </select>
          <input
            type="number"
            placeholder="Year"
            onChange={(e) =>
              dispatch({
                type: "updateFilters",
                payload: { year: e.target.value },
              })
            }
          />
        </form>
      </Dropdown>
    </CardBorder>
  )
}
