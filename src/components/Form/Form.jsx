import React, { useContext, useEffect, useState } from 'react';
import OptionList from './OptionList/OptionList';
import { GlobalContext } from '../../context/GlobalContext';

// Valores iniciales para cada campo de formulario
const initialForm = {
  title: '',
  category: '',
  img: '',
  video: '',
  description: '',
  id: null,
};

const Form = () => {
  const [form, setForm] = useState(initialForm);

  const {
    dataToEdit,
    setDataToEdit,
    updateVideoInfo,
    addNewVideo,
    categories,
  } = useContext(GlobalContext);

  /* hook que evalua si el formulario trae la variable dataToEdit seteada en null, de ser así,
  setea los campos del formulario en vacio, caso contrario los setea con la informacion almacenada en la variable. */
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  // Funcion manejadora del envio del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida que ningún campo de formulario esté vacío.
    if (!form.title || !form.category || !form.img || !form.video) {
      alert('Datos incompletos. Por favor, rellena todos los campos.');
      return;
    }

    /* Si el formulario trae la propiedad id seteada en null, se está agregando un nuevo elemento,
    caso contrario se están actualizando los datos */
    if (form.id === null) {
      addNewVideo(form);
    } else {
      updateVideoInfo(form);
    }

    handleReset();
  };

  /* Funcion manejadora de los cambios en los inputs de formulario. Setea el objeto
  form con los valores digitados en cada campo de formulario  */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Funcion que restea los campos de formulario a su valor inicial.
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <form className='edit__form form center' onSubmit={handleSubmit}>
      <div className='form__field center'>
        <label>Título</label>
        <input
          type='text'
          name='title'
          placeholder='Título'
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div className='form__field center'>
        <label>Categoría</label>
        <OptionList
          name='category'
          categories={categories}
          handleChange={handleChange}
          value={form.category}
          dataToEdit={dataToEdit}
        />
      </div>
      <div className='form__field center'>
        <label>Imagen</label>
        <input
          type='text'
          name='img'
          placeholder='Ruta de imagen'
          value={form.img}
          onChange={handleChange}
        />
      </div>
      <div className='form__field center'>
        <label>Video</label>
        <input
          type='text'
          name='video'
          placeholder='Ruta de video'
          value={form.video}
          onChange={handleChange}
        />
      </div>
      <div className='form__field textarea center'>
        <label>Descripción</label>
        <textarea
          className='form__field-textarea'
          name='description'
          placeholder='Descripción'
          rows='7'
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <aside className='center'>
        <input
          type='submit'
          className='site__header-link'
          style={{ backgroundColor: 'transparent', color: '#fff' }}
          value='Guardar'
        />
        <input
          type='reset'
          className='site__header-link'
          style={{ backgroundColor: 'transparent', color: '#fff' }}
          onClick={handleReset}
          value='Limpiar'
        />
      </aside>
    </form>
  );
};

export default Form;
