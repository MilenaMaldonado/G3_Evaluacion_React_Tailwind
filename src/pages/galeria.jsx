const Gallery = () => {
    const images = [
      '../src/img/ropa1.jpg',
      '../src//img/ropa2.jpg',
      '../src/img/ropa3.jpg',
      '../src/img/ropa4.jpg',
      '../src/img/ropa5.jpg',
      '../src/img/ropa6.jpg'
    ];
  
    return (
      <section id="gallery" className="p-4 grid grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
        ))}
      </section>
    );
  };
  
  export default Gallery;
  