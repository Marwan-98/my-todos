const uncheckAll = (tasks, setTasks) => {
    const updatedTasks = tasks.map((task) => {
      task.complete = false;
      return task;
    });
    setTasks(updatedTasks);
};

export default uncheckAll