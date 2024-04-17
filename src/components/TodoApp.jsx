import React from 'react'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'
import {TodoList} from './TodoList'

export const TodoApp = () => {

  const {toDos,allToDo,pendingToDo,onHandleNewTodo,onHandleDeleteTodo,onHandleDoneTodo} = useTodo();

  return (
    <>
        <div className="row">
            <div className="col-7">
                <h1 aria-label="head_todo_list">ToDo:  {allToDo} <small>Pending: {pendingToDo}</small></h1>
                <hr />
                <TodoList toDos={toDos} onDeleteTodo={onHandleDeleteTodo} onDoneTodo = {onHandleDoneTodo} />
            </div>
            <div className="col-5">
                <h1>Add new ToDo</h1>
                <hr />
                <TodoAdd onNewTodo={onHandleNewTodo}/>
            </div>
        </div>
    </>
  )
}