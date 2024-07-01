import React, { useContext } from 'react';
import Form from '../Form/Form';
import close from '/icons/close-btn.png';
import { GlobalContext } from '../../context/GlobalContext';

const FormModal = () => {
  const { isModalOpen, closeModal } = useContext(GlobalContext);

  return (
    <>
      {isModalOpen && (
        <div className='modal__overlay'>
          <article className='modal__dialog center'>
            <p>Editar Card:</p>
            <Form />
            <button className='modal__dialog-close center' onClick={closeModal}>
              <img src={close} alt='icono-cerrar' />
            </button>
          </article>
        </div>
      )}
    </>
  );
};

export default FormModal;
