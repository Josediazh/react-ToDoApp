import React from 'react'

export const TodoItem = ({id,description,done,onDeleteTodo,onDoneTodo}) => {
  return (
    <>
        <li className="list-group-item">
            <span aria-label='span' className={(done) ? 'text-decoration-line-through': ''}>{description}</span>
            <i aria-label='btn_trash' onClick={ () => onDeleteTodo(id)} className="btn-action float-end bi bi-trash"></i>
            <i aria-label='btn_done' onClick={ () => onDoneTodo(id)} className={ `btn-action float-end bi ${(done) ? 'bi-x-square': 'bi-check2-square'}  `}></i>
        </li>
    </>
  )
}