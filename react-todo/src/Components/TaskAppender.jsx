import { useState, useRef } from "react";

import Alert from "./../modal/Modal";

export default function TaskAppender({ onSaveHandler }) {
  //   const [task, setTask] = useState("");
  //   const [dueDate, setDueDate] = useState("2025-04-29");
  //   const [priority, setPriority] = useState(1);

  //   const onTaskKeyUpHandler = (event) => {
  //     setTask(event.currentTarget.value);
  //   };
  //   const onDueDateChangeHandler = (event) => {
  //     setDueDate(event.currentTarget.value);
  //   };
  //   const onPrioritySelectHandler = (event) => {
  //     setPriority(event.currentTarget.value);
  //   };

  const [errorMessage, setErrorMessage] = useState();
  const alertRef = useRef();

  const taskRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();

  const onSaveClickHandler = () => {
    console.log("alertRef", alertRef);
    console.log("alertRef.current", alertRef.current);

    if (!taskRef.current.value) {
      setErrorMessage("task이름을 입력하세요.");
      alertRef.current.open();
      return;
    }
    if (!dueDateRef.current.value) {
      setErrorMessage("완료 예상일자를 선택하세요.");
      alertRef.current.open();
      return;
    }
    if (!priorityRef.current.value) {
      setErrorMessage("우선순위를 선택하세요!");
      alertRef.current.open();
      return;
    }

    /**
     * App.js
     * - taskList : [{...}, {...}, {...}] + {...}
     *              => [{...}, {...}, {...}, {...}]
     * - onSaveHandler ==> App.js > setTaskList();
     */
    onSaveHandler((prevTaskList) => {
      // prevTaskList 배열을 복사해서 새로운 배열로 생성.
      const newTaskList = [...prevTaskList]; // 펼침연산자
      // 새로운 배열에 새로운 객체를 push 한다.
      newTaskList.push({
        id: prevTaskList.length + 1,
        task: taskRef.current.value,
        dueDate: dueDateRef.current.value,
        priority: priorityRef.current.value,
        done: false,
      });

      return newTaskList;
    });
  };

  return (
    <>
      <footer>
        <input type="text" placeholder="Task" ref={taskRef} />
        <input type="date" ref={dueDateRef} />
        <select ref={priorityRef}>
          <option value="0">우선순위</option>
          <option value="1">높음</option>
          <option value="2">보통</option>
          <option value="3">낮음</option>
        </select>
        <button type="button" onClick={onSaveClickHandler}>
          Save
        </button>
      </footer>
      <Alert ref={alertRef}>
        <div>{errorMessage}</div>
      </Alert>
    </>
  );
}
