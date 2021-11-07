import React, { useState } from 'react'
import useTodos from '../hooks/useTodos';

const initialTodos = [{
    id:1,
    title:'Estudiar React.js',
},{
    id:2,
    title:'Estudiar Node.js',
},{
    id:3,
    title:'Estudiar Angular',
},{
    id:4,
    title:'Estudiar Spring boot',
}];


const TodoApp = () => {
    
    const [todoList, addNewTodo, deleteTodo] = useTodos(initialTodos);
    const [formInput, setFormInput] = useState('');
    const [deleteTodoId, setDeleteTodoId] = useState('');

    const handleInputChange = (e) => {
        setFormInput(e.target.value);
    }

    const handleTodoIdForDeleteChange = (e) => {
        setDeleteTodoId(e.target.value);
    }

    const handleAddTodoFormSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random()*1000),
            title:formInput
        }
        addNewTodo(newTodo);
    }
    
    const handleDeleteTodoFormSubmit = (e) => {
        e.preventDefault();
        deleteTodo(parseInt(deleteTodoId))
        setDeleteTodoId('');
    }

    return (
        <div className="container">
            <h1>TodoApp</h1>
            <div className="add-todo">
                <h3 className="mt-3">Add new Todo</h3>
                <form onSubmit={handleAddTodoFormSubmit}>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Title"
                        value={formInput}
                        onChange={handleInputChange}
                    />
                    <input type="submit" className="btn btn-success mt-2 mb-5" value="Add new Todo"/>
                </form>
            </div>
            <div className="delete-todo">
                <h3>Delete Todo By Id</h3>
                <form onSubmit={handleDeleteTodoFormSubmit}>
                    <input 
                        type="text"
                        min="1"
                        step="1" 
                        className="form-control"
                        placeholder="Todo id for delete"
                        value={deleteTodoId}
                        onChange={handleTodoIdForDeleteChange}
                    />
                    <input type="submit" className="btn btn-danger mt-2 mb-5" value="Delete Todo"/>
                </form>
            </div>
            <div className="todo-list">
                <h3>Your current Todo List</h3>
                <ul className="d-flex">
                    {todoList.map(todo => {
                        return (
                            <li className="card todo-card" style={{background:"#E6DDC4"}} key={todo.id}>
                                <h3 className="card-title">{todo.title}</h3>
                                <hr />
                                <small className="m-3">Id: {todo.id}</small>
                                <p className="todo-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quas?</p>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoApp
