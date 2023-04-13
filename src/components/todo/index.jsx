import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleCompleteness, removeTodo } from "../../store/slices/todo";

import styles from './index.module.css';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleCompleteness({ id: todo.id }));
  }

  const removeTodoItem = () => {
    dispatch(removeTodo(todo.id));
  }

  return (
    <li className={styles.item} >
      {todo.completed ? "👌" : "👋"}{" "}
      <span onClick={toggleTodoItem}
        className={cx({
          [styles.completed]: todo.completed,
        })}
      >
        {todo.content}
      </span>
      <button onClick={removeTodoItem} style={{marginLeft: "20px"}}> delete </button>
    </li>
  );
};
