import ListProvider from "@/context/ListContext"
import ToastProvider from "@/context/ToastContext"

import ItemForm from "@/components/ItemForm"
import ItemDisplay from "@/components/ItemDisplay"
import Filters from "@/components/Filters"
import DebugButtons from "@/components/DebugButtons"

import styles from "./page.module.css"

export default function Home(): JSX.Element {
  return (
    <ToastProvider>
      <ListProvider>
        <main className={styles.main}>
          <ItemForm />
          <ItemDisplay />
          <Filters />
          <DebugButtons />
        </main>
      </ListProvider>
    </ToastProvider>
  )
}
