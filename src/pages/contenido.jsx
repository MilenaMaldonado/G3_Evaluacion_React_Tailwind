import { useState } from 'react';

const Contenido = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main id="main" className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center italic mb-4 text-pink-400" >Bienvenidos a Eclipse Boutique</h1>
      <h2 className="text-2xl font-semibold text-center text-black">Arma tus outfits a tu estilo</h2>
      <p className="mt-4 text-center px-4">
        Eclipse Chic es una boutique de moda exclusiva que se especializa en crear outfits completos para cada ocasión. Nuestro enfoque está en ofrecer conjuntos cuidadosamente seleccionados que reflejan las últimas tendencias de la moda, con un toque de elegancia y sofisticación. En Eclipse Chic, creemos que cada prenda tiene una historia y que cada outfit debe contar una narrativa única, combinando estilo y funcionalidad.
      </p>

      <button 
        className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded"
        onClick={() => setShowModal(true)}
      >
        Mostrar Más
      </button>
      
      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="modal-content bg-white p-8 rounded shadow-lg text-center">
            <h3 className="text-pink-500 italic mb-4">Outfits Completos</h3>
            <p className="mb-4">Desde conjuntos casuales para el día a día hasta atuendos formales para eventos especiales, Eclipse Chic se encarga de coordinar cada pieza de tu vestuario para garantizar que siempre luzcas impecable.</p>
            <h3 className="text-pink-500 italic mb-4">Accesorios Exclusivos</h3>
            <p className="mb-4">Completa tu look con nuestra selección de accesorios de alta calidad, incluyendo joyería, bolsos, y calzado que complementan perfectamente cada outfit.</p>
            <h3 className="text-pink-500 italic mb-4">Tendencias Actuales</h3>
            <p className="mb-4">Nos mantenemos al día con las últimas tendencias en moda para asegurarnos de que siempre encuentres lo más nuevo y vanguardista en nuestra boutique.</p>
            <button 
              className="bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contenido;
