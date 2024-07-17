import { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the form
    }
  };

  return (
    <section id="contact" className="p-8 border border-gray-300 rounded w-2/3 mx-auto">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="name" className="block">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="w-full p-2 border" 
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full p-2 border" 
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block">Comentarios:</label>
          <textarea 
            id="message" 
            name="message" 
            className="w-full p-2 border" 
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500 transition-colors">Enviar</button>
      </form>
    </section>
  );
};

export default Formulario;
