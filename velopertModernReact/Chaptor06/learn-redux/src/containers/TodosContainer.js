import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";
export default function TodosContainer() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = (id) => dispatch(toggleTodo(id));

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}
