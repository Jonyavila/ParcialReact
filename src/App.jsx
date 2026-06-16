import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import PostFormPage from './pages/PostFormPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<PostsPage />} />
                    <Route path="/posts/:id" element={<PostDetailPage />} />
                    <Route path="/posts/new" element={<PostFormPage />} />
                    <Route path="/posts/edit/:id" element={<PostFormPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;