import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, updateTask } from "../../utils/tasksSlice"; 
import TaskInput from "../Tasks/TaskInput";
import TaskList from "../Tasks/TaskList";
import CurrentDate from "../Date/CurrentDate";
import WeatherApp from "../Weather/WeatherApp";
import { getTasksFromStorage } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

function TodoApp() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedTasks = getTasksFromStorage();
        storedTasks.forEach(task => {
            dispatch(addTask(task));
        });
    }, [dispatch]);

    const handleAddTask = (task, priority) => {
        dispatch(addTask({ text: task, priority })); 
    };

    const handleRemoveTask = (index) => {
        dispatch(removeTask(index));
    };

    const handleUpdateTask = (index, newTask, newPriority) => {
        dispatch(updateTask({ index, newTask, newPriority }));
    };

    function handleLogOut() {
        navigate('/')
    }

    return (
        <div className="flex items-center flex-col ">
            <div className="max-w-md flex pt-6 gap-4">
                <h1 className="text-3xl font-bold">Todo List</h1>
                <button className="border-2 border-blue-400 rounded px-4 font-semibold" onClick={handleLogOut}>LogOut</button>
            </div>
            <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
                <WeatherApp />
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Todo Lists</h1>
                    <CurrentDate />
                </div>
                <TaskInput addTask={handleAddTask} />
                <TaskList tasks={tasks} removeTask={handleRemoveTask} updateTask={handleUpdateTask} />
            </div>
        </div>
    );
}

export default TodoApp;