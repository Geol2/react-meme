import TaskList from "./TaskList";
import TaskAppender from "./TaskAppender";
import TaskConTextProvider from "../Contexts/TaskContext";

export default function TodoApp() {
  return (
    <TaskConTextProvider initialState={[]}>
      <div className="wrapper">
        <header>React Todo</header>
        <TaskList />
        <TaskAppender />
      </div>
    </TaskConTextProvider>
  );
}
