import React, { useContext } from 'react';
import deleteIcon from './delete-icon.png';
import editIcon from './edit-icon.png';
import { GlobalContext } from '../../context/GlobalContext';

const Card = (props) => {
  const { img, id } = props.data;
  const { color } = props;
  const { openModal, deleteVideo } = useContext(GlobalContext);

  return (
    <figure className='card'>
      <div
        className='card__img'
        style={{
          backgroundImage: `url(${img})`,
          borderColor: `${color}`,
          boxShadow: `inset 0 0 10px 2px ${color}`,
        }}
      ></div>
      <figcaption
        className='center'
        style={{
          borderLeftColor: `${color}`,
          borderRightColor: `${color}`,
          borderBottomColor: `${color}`,
        }}
      >
        <div className='icon__container center' onClick={() => deleteVideo(id)}>
          <img src={deleteIcon} alt='Icono borrar' className='icon' />
          <span>Borrar</span>
        </div>
        <div
          className='icon__container center'
          onClick={() => openModal(props.data)}
        >
          <img src={editIcon} alt='Icono editar' className='icon' />
          <span>Editar</span>
        </div>
      </figcaption>
    </figure>
  );
};

export default Card;
