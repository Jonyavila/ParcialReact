# ⚡ POSTX - Gestión de Posts

Aplicación web desarrollada con **React + Vite** para la gestión de posts, consumiendo una API REST (JSONPlaceholder). Presenta una interfaz moderna con modo oscuro/claro, efectos glassmorphism, animaciones y una experiencia de usuario de alto nivel.

## ✨ Características

- ✅ Listado, creación, edición y eliminación de posts (CRUD completo).
- 🧭 Navegación con React Router (HashRouter).
- 🗃️ Estado global con Context API (temas y posts).
- 🎨 Temas claro/oscuro con persistencia en localStorage.
- 📌 Uso de `useRef` para enfocar automáticamente el formulario.
- 🔄 Custom hook `usePosts` para manejar la lógica de datos.
- ⚡ Animación de gradiente móvil en el título "⚡POSTX".
- 🖱️ Efectos glassmorphism, neón y transiciones suaves.
- 📱 Diseño 100% responsive.

## 👥 Integrantes del equipo

- **Jonathan Avila** - Desarrollador Full Stack
- **Sofia Fronte** - Desarrollador Full Stack
- **Tamara Navarro** - Desarrollador Full Stack

## 🛠️ Tecnologías utilizadas

- ⚛️ React 18
- ⚡ Vite
- 🧭 React Router DOM (HashRouter)
- 🗃️ Context API (ThemeContext, PostsContext)
- 📌 Hooks personalizados (usePosts)
- 🎨 CSS puro (sin frameworks)
- 🔌 JSONPlaceholder API (mock)

## 📁 Estructura del proyecto


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
