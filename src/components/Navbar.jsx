import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <nav className="navbar">
            <h1> <span className="animated-title">⚡POSTX</span></h1>
            <div className="nav-links">
                <Link to="/">Inicio</Link>
                <Link to="/posts/new">Crear Post</Link>
                <Link to="/about">Acerca de</Link>
                <button onClick={toggleDarkMode} className="theme-toggle">
                    {darkMode ? '☀️ Claro' : '🌙 Oscuro'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;