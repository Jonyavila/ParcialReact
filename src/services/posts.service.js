const API_BASE = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async () => {
    const response = await fetch(API_BASE);
    if (!response.ok) throw new Error('Error al cargar los posts');
    return response.json();
};

export const getPostById = async (id) => {
    const response = await fetch(`${API_BASE}/${id}`);
    if (!response.ok) throw new Error('Post no encontrado');
    return response.json();
};

export const createPost = async (postData) => {
    const response = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Error al crear el post');
    return response.json(); // devuelve { id: 101, ... }
};

export const updatePost = async (id, postData) => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
    });
    if (!response.ok) throw new Error('Error al actualizar el post');
    return response.json();
};

export const deletePost = async (id) => {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Error al eliminar el post');
    return true;
};