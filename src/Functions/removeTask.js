const removeTask = (id, tasks, setTasks) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  export default removeTask