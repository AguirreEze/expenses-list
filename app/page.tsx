import ItemForm from "@/components/ItemForm"
import styles from "./page.module.css"
import ItemDisplay from "@/components/ItemDisplay"
import ListContext from "@/context/ListContext"

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <ListContext>
        <ItemForm />
        <ItemDisplay />
      </ListContext>
    </main>
  )
}
