import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

export const useTodo = () => {

    const InitialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('ToDos')) || [];
    }

    const [toDos, dispatch] = useReducer(todoReducer,InitialState,init);

    useEffect(() => {
        localStorage.setItem('ToDos',JSON.stringify(toDos));
      }, [toDos]);


    const onHandleNewTodo = (todo) => {
        
        const action = {
            type: 'add',
            payload: todo
        }

        dispatch(action);

    }
    const onHandleDeleteTodo = (id) => {
        
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);

    }
    const onHandleDoneTodo = (id) => {
        
        const action = {
            type: 'done',
            payload: id
        }

        dispatch(action);
    }  

    const allToDo = toDos.length;
    const pendingToDo = toDos.filter(todo => todo.done === false).length;  
  
    return {
        toDos,
        allToDo,
        pendingToDo,
        onHandleNewTodo,
        onHandleDeleteTodo,
        onHandleDoneTodo
    }
}