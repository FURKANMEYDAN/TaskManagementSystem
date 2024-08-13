import axios from "axios"

const API_BASE_URL = "http://localhost:3000/api";


export const getTasks = async () => {
    const response  = await fetch(API_BASE_URL);
    return response.json();
};
export const addTask = async (task) =>{
    const response = await fetch(API_BASE_URL,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(task),
    });
    return response.json();
}

export const updateTask = async (id,updateTask) =>{
    const response = await fetch(`${API_BASE_URL}/${id}`,{
        method : 'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(updateTask),
    });
    return response.json();
};


export const deleteTask = async (id) =>{
    const response = await fetch(`${API_BASE_URL}/${id}`,{
        method:'DELETE',

    });
    return response.json();
};

