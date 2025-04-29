import { useState } from "react";

import TaskAppender from "./Components/TaskAppender";
import TaskHeader from "./Components/TaskHeader";
import TaskItem from "./Components/TaskItem";
import TaskList from "./Components/TaskList";

function App() {
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

  const [taskList, setTaskList] = useState(tasks);

  const doneTaskHandler = (event) => {
    // 완료처리한 task의 아이디를 가져온다.
    const targetTaskId = event.currentTarget.value;
    console.log(targetTaskId);

    setTaskList((prevTaskList) => {
      const newTaskList = [...prevTaskList];
      // console.log(newTaskList);

      // taskList 스테이트에서 해당 task의 인덱스를 가져온다.
      const targetIndex = newTaskList.findIndex(
        (taskItem) => taskItem.id === targetTaskId
      );
      console.log(targetIndex);

      // 해당 인덱스의 done 값을 true로 바꿔준다.
      newTaskList[targetIndex].done = true;

      return newTaskList;
    });
  };

  return (
    <div className="wrapper">
      <header>React Todo</header>
      <TaskList>
        <TaskHeader />

        {taskList.map((item) => (
          <TaskItem
            done={item.done}
            key={item.id}
            id={item.id}
            task={item.task}
            dueDate={item.dueDate}
            priority={item.priority}
            onDoneHandler={doneTaskHandler}
          />
        ))}
      </TaskList>
      <TaskAppender onSaveHandler={setTaskList} />
    </div>
  );
}

export default App;
