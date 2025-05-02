import { createContext, memo, useContext } from "react";
import { Link } from "react-router-dom";

import headerStyle from "./TaskHeader.module.css";
import itemStyle from "./TaskItem.module.css";

console.log(itemStyle);

const TaskListContext = createContext();

export default function TaskList({ children }) {
  console.log("-- Call [TaskList] Component");
  console.log("-- Rendered [TaskList] Component");

  const contextValue = { componentName: "TaskList" };
  return (
    <TaskListContext.Provider value={contextValue}>
      <ul className="tasks">{children}</ul>
    </TaskListContext.Provider>
  );
}

TaskList.TaskHeader = memo(function TaskHeader({ taskCount, onCheckboxClick }) {
  console.log("---- Call [TaskHeader] Component");
  console.log("---- Rendered [TaskHeader] Component");

  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error("TaskHeader 컴포넌트는 TaskList 내부에 위치해야 합니다.");
  }
  return (
    <>
      <li className={`${headerStyle.taskItem} ${headerStyle["tasks-counter"]}`}>
        <div>진행중: {taskCount.process}</div>
        <div>완료: {taskCount.done}</div>
      </li>
      <li className={`${headerStyle.taskItem} ${headerStyle["tasks-header"]}`}>
        <input
          className={headerStyle.checkbox}
          id="checkall"
          type="checkbox"
          onChange={onCheckboxClick}
        />
        <label>Task</label>
        <span className={headerStyle.dueDate}>Due date</span>
        <span className={headerStyle.priority}>Priority</span>
      </li>
    </>
  );
});

function TaskItem({ done, id, task, dueDate, priority, onCheckboxClick }) {
  console.log("---- Call [TaskItem] Component");
  console.log("---- Rendered [TaskItem] Component");

  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error("TaskItem 컴포넌트는 TaskList 내부에 위치해야 합니다.");
  }
  return (
    <li className={itemStyle.taskItem}>
      <input
        className={itemStyle.checkbox}
        id={id}
        type="checkbox"
        checked={done}
        value={id}
        onChange={onCheckboxClick}
        disabled={done}
      />
      <label htmlFor={id} className={done ? "done-todo" : undefined}>
        <Link to={`/todo/${id}`}>{task}</Link>
      </label>
      <span
        className={`${itemStyle.dueDate} ${done ? "done-todo" : undefined}`}
      >
        {dueDate}
      </span>
      <span
        className={`${itemStyle.priority} ${done ? "done-todo" : undefined}`}
      >
        {priority}
      </span>
    </li>
  );
}
TaskList.TaskItem = TaskItem;
