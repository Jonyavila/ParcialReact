import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { PostsProvider } from './context/PostsContext'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <PostsProvider>   
          <App />
        </PostsProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);