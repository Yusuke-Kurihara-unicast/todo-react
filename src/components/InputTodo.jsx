import React from "react";

const style = {
  backgroundColor: "#bbffbb",
  padding: "8px",
  borderRadius: "8px",
  width: "400px",
  margin: "8px",
  height: "30px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDoを追加"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
