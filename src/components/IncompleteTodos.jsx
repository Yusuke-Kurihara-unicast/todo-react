import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="title-text">未完了のToDo</p>
      <ul>
        {todos.map((todoItem, index) => {
          return (
            <div key={todoItem} className="list-row">
              <li>{todoItem}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
