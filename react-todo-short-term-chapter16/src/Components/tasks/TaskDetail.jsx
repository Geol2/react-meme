import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { doneTask, getTask } from "../../http/http";
import { useCallback, useState } from "react";

// /todo/:id
const TaskItem = () => {
  const { id } = useParams();

  const [rnd, setRnd] = useState();

  const taskFetch = useCallback(() => {
    return getTask(`${id}?rnd=${rnd}`);
  }, [id, rnd]);

  const { fetchedData, isLoading } = useFetch({}, taskFetch);

  const doneTodoItemHandler = () => {
    const doneFetch = async (fnCallback) => {
      const json = await doneTask(id);
      fnCallback(json.body.taskId);
    };

    doneFetch(() => {
      console.log("완료 처리함.");
      setRnd(Math.random());
    });
  };

  return (
    <div className="wrapper">
      {isLoading && <div>데이터를 불러오는 중입니다.</div>}
      {!isLoading && (
        <div>
          <h1>{fetchedData.body.task}</h1>
          <h3>완료 예정일자 : {fetchedData.body.dueData}</h3>
          <h3>우선순위 : {fetchedData.body.priority}</h3>
          <h3>등록일자 : {fetchedData.body.createAt}</h3>

          {!fetchedData.body.done && (
            <button
              type="button"
              className="confirm-ok"
              onClick={doneTodoItemHandler}
            >
              완료
            </button>
          )}
          {fetchedData.body.done && (
            <h3>완료일자 : {fetchedData.body.doneAt}</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
