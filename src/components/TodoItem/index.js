// Write your code here
import './index.css'

const TodoItem = props => {
  const {key, title} = props
  console.log(key)

  return (
    <li className="todo">
      <h1 className="title">{title}</h1>
      <button className="delete" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
