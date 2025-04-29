export default function TaskAppender() {
  // Save를 클릭하면 동작할 함수.
  const onButtonClickHandler = () => {
    alert("Todo 추가");
  };

  // Task를 입력하면 동작할 함수.
  const onTodoInputKeyUpHandler = (event) => {
    console.log(event.currentTarget.value);
  };

  // 우선 순위를 변경하면 동작할 함수
  const onPriorityChangeHandler = (event) => {
    alert(event.currentTarget.value);
  };

  return (
    <footer>
      <input type="text" placeholder="Task" onClick={onTodoInputKeyUpHandler} />
      <input type="date" />
      <select onClick={onPriorityChangeHandler}>
        <option value="1">높음</option>
        <option value="2">보통</option>
        <option value="3">낮음</option>
      </select>
      <button type="button" onClick={onButtonClickHandler}>
        Save
      </button>
    </footer>
  );
}
