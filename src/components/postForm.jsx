import { useState, useEffect, useRef } from 'react';

const PostForm = ({ initialData = { title: '', body: '' }, onSubmit, submitLabel = 'Guardar' }) => {
    const [formData, setFormData] = useState(initialData);
    const titleInputRef = useRef(null);

    useEffect(() => {
        // Enfocar el primer input al montar el formulario (useRef aplicado)
        if (titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim() || !formData.body.trim()) {
            alert('Todos los campos son obligatorios');
            return;
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
                <label>Título</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    ref={titleInputRef}
                    required
                />
            </div>
            <div className="form-group">
                <label>Contenido</label>
                <textarea
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">{submitLabel}</button>
        </form>
    );
};

export default PostForm;