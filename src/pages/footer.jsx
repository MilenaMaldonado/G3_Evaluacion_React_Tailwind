const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-center">
        {/* Información de contacto */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-2xl font-semibold mb-4">Contáctanos:</h1>
          <p className="mb-2">Eclipse Boutique</p>
          <p className="mb-2">Correo electrónico: eclipseboutique@gmail.com</p>
          <p className="mb-2">Teléfono: +1 234 567 890</p>
          <p className="mb-2">Dirección: Av. Principal #1234, Ciudad, País</p>
        </div>
  
        {/* Redes sociales */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Síguenos en redes sociales:</h1>
          <div className="flex items-center">
            <a href="https://facebook.com" className="text-white hover:text-blue-500 transition-colors duration-300 mr-4">
              Facebook
            </a>
            <a href="https://twitter.com" className="text-white hover:text-blue-500 transition-colors duration-300 mr-4">
              Twitter
            </a>
            {/* Añadir más redes sociales aquí */}
          </div>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  