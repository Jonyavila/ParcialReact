import { useState, useEffect, useCallback } from 'react';
import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts.service';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar posts desde la API (solo IDs 1-100)
    const loadPosts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAllPosts();
            // Agregar fecha simulada para mostrar en UI
            const postsWithDate = data.map(post => ({
                ...post,
                createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 3600000).toLocaleDateString('es-ES')
            }));
            setPosts(postsWithDate);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    // Cargar al montar
    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    // ---- CREAR POST (local + simulado en API) ----
    const addPost = async (postData) => {
        try {
            // Llamar a la API (devuelve { id: 101 } simulado)
            await createPost(postData);
            
            // Crear post local con ID único (mayor a 100)
            const newPost = {
                ...postData,
                id: Date.now(), // ID local (ej. 1734567890123)
                createdAt: new Date().toLocaleDateString('es-ES'),
                userId: 1,
            };
            // Agregar al estado local
            setPosts(prev => [newPost, ...prev]);
            return newPost;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // ---- EDITAR POST (distingue entre API y local) ----
    const editPost = async (id, postData) => {
        try {
            // Si el ID es de la API (1-100), actualizar en el servidor
            if (id <= 100) {
                await updatePost(id, postData);
            }
            // SIEMPRE actualizar en el estado local (tanto para API como para local)
            setPosts(prev =>
                prev.map(post => (post.id === id ? { ...post, ...postData } : post))
            );
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    // ---- ELIMINAR POST (distingue entre API y local) ----
    const removePost = async (id) => {
        try {
            // Si el ID es de la API, eliminarlo del servidor
            if (id <= 100) {
                await deletePost(id);
            }
            // SIEMPRE eliminar del estado local
            setPosts(prev => prev.filter(post => post.id !== id));
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    return {
        posts,
        loading,
        error,
        addPost,
        editPost,
        removePost,
        reloadPosts: loadPosts,
    };
};