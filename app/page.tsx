import ListContext from "@/context/ListContext"

import ItemForm from "@/components/ItemForm"
import ItemDisplay from "@/components/ItemDisplay"
import Filters from "@/components/Filters"
import DebugButtons from "@/components/DebugButtons"

import styles from "./page.module.css"

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <ListContext>
        <ItemForm />
        <ItemDisplay />
        <Filters />
        <DebugButtons />
      </ListContext>
    </main>
  )
}
