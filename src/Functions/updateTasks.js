const updateTasks = (input, prevTasks, setTasks) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { text: input, complete: false, id: Math.random() },
    ]);
};

export default updateTasks