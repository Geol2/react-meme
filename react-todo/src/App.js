import TaskAppender from "./Components/TaskAppender";
import TaskHeader from "./Components/TaskHeader";
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";

function App() {
  const todoName = "React Component 마스터";

  const tasks = [
    {
      id: "item1",
      task: "React Component Master",
      dueDate: "2025-12-31",
      priority: 1,
      done: true,
    },
    {
      id: "item2",
      task: "React Props Master",
      dueDate: "2025-10-11",
      priority: 1,
      done: true,
    },
    {
      id: "item3",
      task: "React States Master",
      dueDate: "2025-09-07",
      priority: 1,
      done: false,
    },
  ];

  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TaskList>
        <TaskHeader />

        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            id={item.id}
            task={item.task}
            dueDate={item.dueDate}
            priority={item.priority}
          />
        ))}
      </TaskList>
      <TaskAppender />
    </div>
  );
}

export default App;
