import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header.jsx'
import Footer from './pages/footer.jsx'
import Galeria from './pages/galeria.jsx'
import Info from './pages/contenido.jsx'
import Formulario from './pages/formulario.jsx'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Galeria" element={<Gallery />} />
          <Route path="/Formulario" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
