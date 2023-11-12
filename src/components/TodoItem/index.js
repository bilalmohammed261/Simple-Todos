// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  // console.log(key)

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo">
      <p className="title">{title}</p>
      <button className="delete" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
