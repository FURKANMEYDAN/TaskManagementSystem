import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, deleteTask } from './apiService';

const TaskList = ({ updateTrigger }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [updateTrigger]);

    const fetchTasks = async () => {
        try {
            const tasks = await getTasks();
            console.log("Fetched tasks:", tasks);
            setTasks(tasks);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleToggleComplete = async (id, isCompleted) => {
        const task = tasks.find(t => t.id === id);
        await updateTask(id, { ...task, isCompleted: !isCompleted });
        fetchTasks();
    };

    return (
        <div className='task-list'>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            {task.title} - {task.description}
                        </span>
                        <button onClick={() => handleToggleComplete(task.id, task.isCompleted)}>
                            {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
