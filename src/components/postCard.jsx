import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const PostCard = ({ post, onDelete }) => {
    const [showModal, setShowModal] = useState(false);
    const shortBody = post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body;

    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <p>{shortBody}</p>
            <p>📅 {post.createdAt}</p>
            <div className="card-actions">
                <Link to={`/posts/${post.id}`}>
                    <button>Ver detalles →</button>
                </Link>
                <Link to={`/posts/edit/${post.id}`}>
                    <button className="warning">✏️ Editar</button>
                </Link>
                <button className="danger" onClick={() => setShowModal(true)}>🗑 Eliminar</button>
            </div>
            {showModal && (
                <ConfirmDeleteModal
                    onConfirm={() => {
                        onDelete(post.id);
                        setShowModal(false);
                    }}
                    onCancel={() => setShowModal(false)}
                    title={post.title}
                />
            )}
        </div>
    );
};

export default PostCard;