import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import Galeria from './pages/galeria.jsx'
import Contenido from './pages/contenido.jsx'
import Formulario from './pages/formulario.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <br/>
    <Contenido/>
    <br/>
    <Galeria/>
    <br/>
    <Formulario/>
    <br/>
    <Footer/>
    
  </React.StrictMode>,
)
