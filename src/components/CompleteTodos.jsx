import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title-text">完了のToDo</p>
      <ul>
        {todos.map((todoItem, index) => {
          return (
            <div key={todoItem} className="list-row">
              <li>{todoItem}</li>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
