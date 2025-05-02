import { useState, createContext } from "react";

export const TaskContext = createContext({
  todoLists: [],
  done(taskId) {},
  allDone() {},
  add(task, dueDate, priority) {},
});

export default function TaskConTextProvider({ children, initialState }) {
  const [todoLists, setTodoLists] = useState(initialState ?? []);

  const taskContextValue = {
    todoLists,
    done(taskId) {
      setTodoLists((prevTodoList) => {
        const newTodoList = [...prevTodoList];

        newTodoList.map((todo) => {
          if (todo.id === taskId) {
            todo.done = true;
          }
          return todo;
        });
        return newTodoList;
      });
    },
    alldone(task, dueDate, priority) {
      setTodoLists((prevTodoList) => {
        const newTodoList = [...prevTodoList];

        newTodoList.map((todo) => {
          todo.done = true;
          return todo;
        });
        return newTodoList;
      });
    },
    add(task, dueDate, priority) {
      setTodoLists((prevTodoList) => {
        const newTodoList = [...prevTodoList];
        newTodoList.push({
          id: "item" + (prevTodoList.length + 1),
          task,
          dueDate,
          priority,
          done: false,
        });
        return newTodoList;
      });
    },
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
}
