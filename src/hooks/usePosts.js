import { useState, useEffect, useCallback } from 'react';
import { getAllPosts, createPost, updatePost, deletePost } from '../services/posts.service';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPosts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getAllPosts();
            // Añadir una fecha simulada para mostrar en la UI (solo estético)
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

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    const addPost = async (postData) => {
        try {
            await createPost(postData);
            // Como la API devuelve id 101, usamos timestamp para evitar colisiones locales
            const newPost = {
                ...postData,
                id: Date.now(), // ID único local
                createdAt: new Date().toLocaleDateString('es-ES'),
                userId: 1,
            };
            setPosts(prev => [newPost, ...prev]);
            return newPost;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const editPost = async (id, postData) => {
        try {
            await updatePost(id, postData);
            setPosts(prev =>
                prev.map(post => (post.id === id ? { ...post, ...postData } : post))
            );
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    const removePost = async (id) => {
        try {
            await deletePost(id);
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