import React, { useState, useEffect, useRef } from "react";

const TodoForm = props => {
  let [input, setInput] = useState(props.edit ? props.edit.value : "");
  let inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  let handleChange = e => {
    setInput(e.target.value);
  };

  let handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your List"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-btn edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a Todo List"
            value={input}
            name="text"
            className="text-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-btn">Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
