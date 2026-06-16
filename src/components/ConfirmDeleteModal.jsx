const ConfirmDeleteModal = ({ onConfirm, onCancel, title }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>⚠️ Confirmar eliminación</h3>
                <p>¿Estás seguro de eliminar el post <strong>"{title}"</strong>?</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm} className="danger">Eliminar</button>
                    <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;