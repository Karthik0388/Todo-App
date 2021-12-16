import React, { useState } from "react";
import TodoForm from "./TodoForm";
const Todo = ({ todos, completeTodo ,removeTodo,updateTodo}) => {
  let [edit, setEdit] = useState({
    id: null,
    value: "",
  });

    let submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    if (edit.id) {
      return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="delete-icon">
        <i onClick={ () => removeTodo(todo.id)} className="fas fa-trash-alt"></i>
      </div>
      <div className="edit-icon">
        <i onClick={() => setEdit({ id: todo.id, value: todo.text })} className="fas fa-edit"></i>
      </div>
    </div>
  ));
};

export default Todo;
