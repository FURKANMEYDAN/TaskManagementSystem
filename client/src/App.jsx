import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


const App = () => {
    const [updateTrigger, setUpdateTrigger] = useState(false);

    const handleTaskAdded = () => {
        setUpdateTrigger(!updateTrigger);
    };

    return (
        <div className='app-container'> 
            <h1>Task Management System</h1>
            <AddTask onTaskAdded={handleTaskAdded} />
            <TaskList updateTrigger={updateTrigger} />
        </div>
    );
};

export default App;
