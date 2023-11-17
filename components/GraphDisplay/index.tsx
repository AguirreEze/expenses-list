"use client"

import { useContext } from "react"
import { ListContext } from "@/context/ListContext"
import CardBorder from "../CardBorder"
import PiePice from "./PiePiece"

import type { TypeItem } from "@/types"

import styles from "./styles.module.css"
import { type CATEGORIES, CATEGORIES_COLORS } from "@/utils/constants"
import Dropdown from "../Dropdown"

interface Category {
  name: (typeof CATEGORIES)[number]
  count: number
  percentage: number
  rotate: number
  color: string
}

interface CategoryIncomplete
  extends Omit<Category, "percentage" | "rotate" | "color"> {}

export default function GraphDisplay(): JSX.Element {
  const {
    data: { list },
  } = useContext(ListContext)

  const generateCategoryArray = (arr: TypeItem[]): Category[] => {
    let rotate = -90
    return arr
      .reduce(
        (acc: CategoryIncomplete[], curr: TypeItem): CategoryIncomplete[] => {
          return typeof acc?.find((e) => e.name === curr.category) === "object"
            ? acc.map((e) => {
                return e.name === curr.category
                  ? { ...e, count: e.count + 1 }
                  : e
              })
            : [...acc, { name: curr.category, count: 1 }]
        },
        []
      )
      .sort((a, b) => b?.count - a?.count)
      .map((category) => {
        const a = {
          ...category,
          percentage: (category.count / list.length) * 100,
          rotate,
          color: CATEGORIES_COLORS[category.name],
        }
        rotate = rotate + 360 * (category.count / list.length)
        return a
      })
  }

  return (
    <CardBorder>
      <Dropdown title="Chart" maxHeight="500px" open>
        <div className={styles.div}>
          <svg height="150" width="150" viewBox="0 0 20 20">
            <PiePice color={"#333"} percentage={100} rotate={0} />
            {generateCategoryArray(list).map((category) => {
              return (
                <PiePice
                  color={category.color}
                  percentage={category.percentage}
                  rotate={category.rotate}
                  key={category.name}
                />
              )
            })}
          </svg>
          <ul className={styles.list}>
            {generateCategoryArray(list).map((category) => {
              return (
                <li className={styles.item} key={category.name}>
                  <div
                    className={styles.itemDecoration}
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span>{`${category.name} (${(
                    Math.round(category.percentage * 100) / 100
                  ).toFixed(2)}%)`}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </Dropdown>
    </CardBorder>
  )
}
