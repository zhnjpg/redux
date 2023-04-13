import { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";

import styles from './index.module.css';

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  const [filter, setFilter] = useState('all');

  const filteredTodos = filter === 'all'
    ? todos
    : todos.filter((todo) => filter === 'completed' ? todo.completed : !todo.completed)


  return (
    <div >
      <div className={styles.buttons}>
        <button onClick={() => setFilter('completed')} >completed</button> 
        <button onClick={() => setFilter('uncompleted')} >in progress</button> 
        <button onClick={() => setFilter('all')} >all</button> 
      </div>

    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
    </div>
  );
};

