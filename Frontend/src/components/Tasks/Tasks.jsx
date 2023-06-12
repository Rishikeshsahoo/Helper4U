import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Task from "../Task/Task";
import EditModal from "../editModal/EditModal";
function Tasks({ currentDivision, setToggle, toggle }) {
  const [tasks, setTasks] = useState({});
  const [open, setOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const openModal = (task) => {
    setOpen(true);
    setSelectedTask(task);
  };

  const handleSubmit = (title, description, status) => {
    axios
      .patch(`http://localhost:4000/user/task/${selectedTask.uuid}`, {
        title: title,
        description: description,
        status: status,
        priority: 0,
        division: selectedTask.division,
      })
      .then((response) => {
        console.log(response.data);
        setToggle((prev) => {
          return (prev + 1) % 2;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete=()=>{
    axios.delete( `http://localhost:4000/user/task/${selectedTask.uuid}`)
    .then((res)=>{console.log(res.data)
        setToggle((prev) => {
            return (prev + 1) % 2;
          });})
    .catch((err)=>{console.log(err)})
  }

  useEffect(() => {
    console.log(`http://localhost:4000/user/taskdivision/${currentDivision}`);
    axios
      .get(`http://localhost:4000/user/taskdivision/${currentDivision}`)
      .then((response) => {
        if (response.data !== null) setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
        setTasks({});
      });
  }, [currentDivision, toggle]);


  return (
    <div className="task-outer">

      <EditModal
        open={open}
        setOpen={setOpen}
        selectedTask={selectedTask}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      ></EditModal>

      <div className="task-block task-pending">

        <div style={{ backgroundColor: "red" }} className="task-tile">
          Pending
        </div>

        {tasks.length > 0 &&
          tasks
            .filter((item) => {
              return item.status == 0;
            })
            .map((item, index) => {
              return (
                <div
                  onClick={() => {
                    openModal(item);
                  }}
                >
                  <Task task={item}></Task>
                </div>
              );
            })}

      </div>
      <div className="task-block task-inprogress">
        <div style={{ backgroundColor: "gray" }} className="task-tile">
          {" "}
          In Progress
        </div>
        {tasks.length > 0 &&
          tasks
            .filter((item) => {
              return item.status == 1;
            })
            .map((item, index) => {
              return (
                <div
                  onClick={() => {
                    openModal(item);
                  }}
                >
                  <Task task={item}></Task>
                </div>
              );
            })}
      </div>
      <div className="task-block task-completed">
        <div style={{ backgroundColor: "green" }} className="task-tile">
          {" "}
          Completed
        </div>
        {tasks.length > 0 &&
          tasks
            .filter((item) => {
              return item.status == 2;
            })
            .map((item, index) => {
              return (
                <div
                  onClick={() => {
                    openModal(item);
                  }}
                >
                  <Task task={item}></Task>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Tasks;
