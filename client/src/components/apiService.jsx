import axios from 'axios';

const API_BASE_URL = "http://localhost:5189/api/tasks";

export const getTasks = async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }
    const text = await response.text();
    return text ? JSON.parse(text) : [];
};

export const addTask = async (task) => {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const updateTask = async (id, updateTask) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateTask),
    });
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    return response.json();
};
