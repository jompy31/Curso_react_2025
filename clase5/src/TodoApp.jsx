import React, {useState} from 'react'

const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] =useState("")

    //agregar tareas usando
    const addTodo = (text) => {
        const newTodos = [...todos]; //copiamos el arreglo actual
        newTodos.push ({ id: Date.now(), text}) //usamos push para agregar datos en arreglo
        setTodos(newTodos); //actualizamos el estado del arreglo
    };
    
    //eliminar tarea usando filter
    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos);
    };

    const renderTodos = () =>{
        return todos.map((todo) => (
            <li key={todo.id}>
            {todo.text} (ID: {todo.id})
            <button onClick={() => deleteTodo(todo.id)}> X </button>
            </li>
        ));
    };

  return (
    <div>
        <h1> lista de tareas</h1>
        <input 
        type ="text"
        placeholder= "Escribe una tarea"
        value={text}
        onChange={(e) => setText(e.target.value)} 
        />
        <button onClick={()=> text.trim() !== "" ? (addTodo(text), setText("")): null }>
            Agregar Tarea
            </button>
        <ul>{renderTodos()}</ul>
    </div>
  )
}

export default TodoApp