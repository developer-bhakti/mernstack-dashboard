import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailledTask from "./FailledTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }

        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }

        if (elem.completeTask) {
          return <CompleteTask key={idx} data={elem} />;
        }

        if (elem.failledTask) {
          return <FailledTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
