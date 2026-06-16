import { createContext, useContext } from 'react';
import { usePosts } from '../hooks/usePosts';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
    // Este custom hook se ejecuta UNA SOLA VEZ y mantiene el estado global
    const postsData = usePosts();
    return <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>;
};

// Hook personalizado para consumir el contexto
export const usePostsContext = () => {
    const context = useContext(PostsContext);
    if (!context) {
        throw new Error('usePostsContext debe usarse dentro de PostsProvider');
    }
    return context;
};