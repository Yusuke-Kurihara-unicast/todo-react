import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value); //inputの中身がStateなので、Stateを変化させてあげないと反映されない
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (targetTodoIndex) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(targetTodoIndex, 1); //splice
    setIncomplateTodos(newTodos);
  };

  const onClickComplete = (targetTodoIndex) => {
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(targetTodoIndex, 1); //splice
    setIncomplateTodos(newIncomplateTodos);

    const newComplateTodos = [
      ...complateTodos,
      incomplateTodos[targetTodoIndex]
    ];
    setComplateTodos(newComplateTodos);
  };

  const onClickBack = (targetTodoIndex) => {
    const newIncomplateTodos = [
      ...incomplateTodos,
      complateTodos[targetTodoIndex]
    ];
    setIncomplateTodos(newIncomplateTodos);

    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(targetTodoIndex, 1); //splice
    setComplateTodos(newComplateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5 && true}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは５こまで</p>
      )}
      <IncompleteTodos
        todos={incomplateTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />

      <CompleteTodos todos={complateTodos} onClick={onClickBack} />
    </>
  );
};
