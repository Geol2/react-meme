export default function TaskItem({
  done,
  id,
  task,
  dueDate,
  priority,
  onDoneHandler,
}) {
  return (
    <li className="task-item">
      <input id={id} type="checkbox" onChange={onDoneHandler} disabled={done} />
      <label htmlFor={id} className={done ? "done-todo" : ""}>
        {task}
      </label>
      <span className={`due-date ${done ? "done-todo" : ""}`}>{dueDate}</span>
      <span className={`priority ${done ? "done-todo" : ""}`}>{priority}</span>
    </li>
  );
}
