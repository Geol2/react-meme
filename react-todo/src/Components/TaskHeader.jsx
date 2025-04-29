export default function TaskHeader() {
  return (
    <li className="tasks-header">
      <input id="checkall" type="checkbox" />
      <label>Task</label>
      <span className="due-date">Due date</span>
      <span className="priority">Priority</span>
    </li>
  );
}
