import { TodoItem } from "./TodoItem"


export const TodoList = ({toDos,onDeleteTodo,onDoneTodo}) => {
    
  return (
    <>
        <ul className="list-group">
            {
                toDos.map( ({id,description,done}) => {
                    return (
                        <TodoItem onDoneTodo = {onDoneTodo} onDeleteTodo = {onDeleteTodo} key={id} id={id} description={description} done={done} />
                    )
                })
            }
        </ul>
    </>
  )
}