import { useState } from "react"
import styles from "./button.module.css"

/*    */

/* import MinhaLista from "./components/MinhaLista"

export default function App() {
  return (
    <div>
      <h1>Listas no React</h1>
      <MinhaLista />
    </div>
  )
} */

/* const tarefas = [
  { id: "1", title: "minha primenra tarefa" },
  { id: "2", title: "minha segunda tarefa" },
  { id: "3", title: "minha terceira tarefa" },
  { id: "4", title: "minha quarta tarefa" },
]

export default function App() {
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      )
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }
    buscarDados().then((res) => setTarefas(res))
  }, [])

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>
              {tarefa.title}
              {tarefa.completed ? "- Tarefa concluída" : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
} */

export default function MeuContador() {
  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }
  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>
        aumentar
      </button>
    </div>
  )
}
