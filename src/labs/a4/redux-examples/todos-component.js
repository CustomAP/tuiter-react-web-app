import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState({ do: "" });
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };
  const dispatch = useDispatch();
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
    setTodo({ do: "" });
  };
  const deleteTodoHandler = (index) => {
    dispatch(deleteTodo(index));
  };
  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };
  return (
    <div>
      <h3>Todos</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={createTodoClickHandler}
            className="btn btn-primary w-25 float-end"
          >
            Create
          </button>
          <input
            onChange={todoChangeHandler}
            value={todo.do}
            className="form-control w-75"
          />
        </li>
        {todos.map((todo, index) => (
          <li className="list-group-item">
            <button
              onClick={() => deleteTodoHandler(index)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>{" "}
            <input
              type="checkbox"
              className="ms-2"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
            />
            {todo.do}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
