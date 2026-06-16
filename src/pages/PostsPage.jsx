import { usePostsContext } from '../context/PostsContext';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const PostsPage = () => {
    const { posts, loading, error, removePost } = usePostsContext();

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h2>Listado de Posts</h2>
            <span className="posts-count">Total: {posts.length}</span>
            <div className="posts-grid">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} onDelete={removePost} />
                ))}
            </div>
        </div>
    );
};

export default PostsPage;