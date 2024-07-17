const Header = () => (
    <header className="p-4 bg-black text-white flex justify-between items-center">
      <div className="text-xl font-bold">
        <img src="../src/img/logo2.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#main">Inicio</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#contact">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  