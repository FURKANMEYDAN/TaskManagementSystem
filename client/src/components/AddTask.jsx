import React , {useState} from 'react'
import { addTask } from './apiService'


const AddTask = ({onTaskAdded}) =>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newTask = {title,description,isCompleted:false};
        await addTask(newTask);
        onTaskAdded();
        setTitle('');
        setDescription('');

    };
    return(
        <form className='add-task-form' onSubmit={handleSubmit}>
            <h2>Add Task</h2>
            <input 
            type="text"
             placeholder='Title' 
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             required 
             />
             <input 
             type="text"
              placeholder='Description'
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            required
             />
             <button type='submit'>Add Task</button>
        </form>


    );

};

export default AddTask;