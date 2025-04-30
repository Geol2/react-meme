export default function TaskHeader({ onCheckboxClick }) {
  return (
    <li className="tasks-header">
      <input id="checkall" type="checkbox" onChange={onCheckboxClick} />
      <label>Task</label>
      <span className="due-date">Due date</span>
      <span className="priority">Priority</span>
    </li>
  );
}
