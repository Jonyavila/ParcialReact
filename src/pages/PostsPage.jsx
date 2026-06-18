import { useState } from 'react';
import { usePostsContext } from '../context/PostsContext';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const PostsPage = () => {
    const { posts, loading, error, removePost } = usePostsContext();
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar posts por título o contenido (insensible a mayúsculas)
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <div className="posts-header">
                <h2>Listado de Posts</h2>
                <span className="posts-count">Total: {filteredPosts.length}</span>
            </div>

            {/* Buscador */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="🔍 Buscar posts por título o contenido..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                {searchTerm && (
                    <button 
                        className="search-clear"
                        onClick={() => setSearchTerm('')}
                    >
                        ✕
                    </button>
                )}
            </div>

            <div className="posts-grid">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map(post => (
                        <PostCard key={post.id} post={post} onDelete={removePost} />
                    ))
                ) : (
                    <p className="no-results">No se encontraron posts que coincidan con "{searchTerm}"</p>
                )}
            </div>
        </div>
    );
};

export default PostsPage;