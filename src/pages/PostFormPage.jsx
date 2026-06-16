import { useParams, useNavigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { usePostsContext } from '../context/PostsContext';
import PostForm from '../components/PostForm';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const PostFormPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addPost, editPost, posts, loading: postsLoading } = usePostsContext();
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const isEditMode = Boolean(id);

    const initialData = useMemo(() => {
        if (isEditMode) {
            if (postsLoading) return null;
            const postToEdit = posts.find(p => p.id === Number(id));
            return postToEdit ? { title: postToEdit.title, body: postToEdit.body } : null;
        } else {
            return { title: '', body: '' };
        }
    }, [isEditMode, id, posts, postsLoading]);

    const notFoundError = useMemo(() => {
        if (isEditMode && !postsLoading && !initialData) return 'Post no encontrado';
        return null;
    }, [isEditMode, postsLoading, initialData]);

    const handleSubmit = async (formData) => {
        setSubmitting(true);
        setError(null);
        try {
            if (isEditMode) {
                await editPost(Number(id), formData);
                alert('✅ Post actualizado correctamente');
                navigate(`/posts/${id}`);
            } else {
                const newPost = await addPost(formData);
                alert('✅ Post creado correctamente');
                navigate(`/posts/${newPost.id}`);
            }
        } catch (err) {
            setError(err.message);
            alert('❌ Error: ' + err.message);
        } finally {
            setSubmitting(false);
        }
    };

    if (postsLoading && isEditMode) return <LoadingSpinner />;
    if (notFoundError) return <ErrorMessage message={notFoundError} />;
    if (!initialData && isEditMode) return <LoadingSpinner />;

    return (
        <div>
            <h2>{isEditMode ? 'Editar Post' : 'Nuevo Post'}</h2>
            <PostForm
                key={isEditMode ? `edit-${id}` : 'create'} // fuerza reinicio
                initialData={initialData}
                onSubmit={handleSubmit}
                submitLabel={isEditMode ? 'Actualizar' : 'Crear'}
            />
            {submitting && <p style={{ textAlign: 'center' }}>Guardando...</p>}
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default PostFormPage;