import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

  const { formState, onInputChange, onResetForm, task } = useForm(
    {
        task: '',
    }
  );  

  const onSubmit = (event) => {

    event.preventDefault();

    if (task.length <= 1 ) return;

    const newTodo = {
        id: new Date().getTime(),
        description: task,
        done: false
    }

    onNewTodo(newTodo);
    onResetForm();

    } 

  return (
    <>
        <form onSubmit={onSubmit}>
            <input
                 placeholder="New task?" 
                 className="form-control" 
                 type="text" 
                 name="task" 
                 value={task}
                 onChange={onInputChange}
                 />
            <button  className="btn btn-outline-primary mt-2">Add Task</button>
        </form>
    </>
  )
}