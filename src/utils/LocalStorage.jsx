export const admin= {
        email : 'quadb@gmail.com',
        password: '123',
}

export const getTasksFromStorage = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
};
  
export const saveTasksToStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
  