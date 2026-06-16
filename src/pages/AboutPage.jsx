const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>✨ Acerca de Post</h1>
            <h2><span className="lightning-effect">⚡</span> POSTX</h2>
            <hr style={{ margin: '1rem 0', borderColor: 'var(--border-subtle)' }} />
            <p>Sistema de Gestión de Posts</p>
            <p>Aplicación desarrollada con <strong>React + Vite</strong> para el parcial de Programación Web II.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', margin: '1.5rem 0' }}>
                <span className="tech-badge">⚛️ React</span>
                <span className="tech-badge">⚡ Vite</span>
                <span className="tech-badge">🧭 React Router</span>
                <span className="tech-badge">🗃️ Context API</span>
                <span className="tech-badge">📌 useRef</span>
            </div>
            <hr style={{ margin: '1rem 0', borderColor: 'var(--border-subtle)' }} />
            <p><strong>🌓 Modo oscuro</strong> (disponible en el navbar)</p>
            <footer style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.7 }}>
                © 2026 ⚡ POSTX - Todos los derechos reservados
            </footer>
        </div>
    );
};
export default AboutPage;