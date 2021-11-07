import { useState } from 'react'

const useTodos = (initialTodos) => {
    
    const [todoList, setTodoList] = useState(initialTodos);
    
    const addNewTodo = (todo) => {
        setTodoList([...todoList, todo]);
    }

    const deleteTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id !== todoId);
        setTodoList(newTodoList);
    }

    return([
        todoList,
        addNewTodo, 
        deleteTodo]        
    );
}

export default useTodos
