import { useParams, useNavigate, Link } from 'react-router-dom';
import { usePostsContext } from '../context/PostsContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import { useState } from 'react';

const PostDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { posts, loading, removePost } = usePostsContext();
    const [showModal, setShowModal] = useState(false);

    const post = posts.find(p => p.id === Number(id));

    const handleDelete = async () => {
        try {
            await removePost(Number(id));
            navigate('/');
        } catch (err) {
            alert('Error al eliminar: ' + err.message);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (!post) return <ErrorMessage message="Post no encontrado" />;

    return (
        <div className="post-detail">
            <div className="detail-header">
                <span className="detail-id">#{post.id}</span>
                <h1 className="detail-title">{post.title}</h1>
            </div>

            <div className="detail-body">
                <p><strong>Contenido:</strong></p>
                <p>{post.body}</p>
            </div>

            <p className="detail-date">📅 {post.createdAt}</p>

            <div className="detail-actions">
                <Link to="/">
                    <button className="secondary">← Volver al listado</button>
                </Link>
                <Link to={`/posts/edit/${post.id}`}>
                    <button className="warning">✏️ Editar</button>
                </Link>
                <button className="danger" onClick={() => setShowModal(true)}>🗑 Eliminar</button>
            </div>

            {showModal && (
                <ConfirmDeleteModal
                    onConfirm={handleDelete}
                    onCancel={() => setShowModal(false)}
                    title={post.title}
                />
            )}
        </div>
    );
};

export default PostDetailPage;