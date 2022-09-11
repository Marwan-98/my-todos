const checkDone = (id, tasks, setTasks) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(updatedTasks);
};

 export default checkDone