"use client"

import { useContext, useEffect } from "react"
import { ListContext } from "@/context/ListContext"

export default function ItemDisplay(): JSX.Element {
  const { list, dispatch } = useContext(ListContext)
  useEffect(() => {
    dispatch({ type: "updateList" })
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>descripton</th>
          <th>value</th>
          <th>date</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {list.map((elem) => (
          <tr key={elem.key}>
            <td>{elem.description}</td>
            <td>{elem.value}</td>
            <td>{elem.date}</td>
            <td>{elem.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
