export default function MyButton(props) {
  console.log(props.conteudo)
  return (
    <p>
      <button>{props.conteudo}</button>
    </p>
  )
}
