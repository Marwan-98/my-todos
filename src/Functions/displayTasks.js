const displayTasks = (tasks, filter) => {
    switch (filter) {
        case "COMPLETE":
        return tasks.filter((task) => task.complete);
        case "NON_COMPLETE":
        return tasks.filter((task) => !task.complete);
        case "ALL":
        default:
        return tasks;
    }
}

export default displayTasks