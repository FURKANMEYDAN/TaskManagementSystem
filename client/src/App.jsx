import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

const App = () =>{
  const [updateTrigger,setUpdateTrigger] = useState(false);
  const handleTaskAdded = () =>{
    setUpdateTrigger(!updateTrigger);

  };
  return(
    <div>
      <h1>Task Management System</h1>
      <AddTask onTaskAdded={handleTaskAdded}/>
      <TaskList key={updateTrigger}/>
    </div>
  );
};

export default App;
