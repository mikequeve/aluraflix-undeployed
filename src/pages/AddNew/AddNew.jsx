import React, { useContext } from 'react';
import Form from '../../components/Form/Form';
import { GlobalContext } from '../../context/GlobalContext';

const AddNewVideo = () => {
  const { addNewVideo, categories } = useContext(GlobalContext);

  return (
    <>
      <main>
        <section className='add__section center'>
          <div className='container center'>
            <h1 className='site__title' style={{ fontWeight: '900' }}>
              Nuevo Video
            </h1>
            <p className='site__banner-text'>
              completa el formulario para crear una nueva tarjeta de video
            </p>
            <div
              className='center'
              style={{
                width: '52%',
                color: 'var(--white)',
                justifyContent: 'start',
                padding: '1rem 0',
                borderBlock: '1px solid var(--dark-grey)',
              }}
            >
              <h2 style={{ textAlign: 'start' }}>Crear Tarjeta</h2>
            </div>
            <article className='add__form-container center'>
              <Form addNewVideo={addNewVideo} categories={categories} />
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddNewVideo;
