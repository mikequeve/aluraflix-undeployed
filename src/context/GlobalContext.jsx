import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

// ENDPOINT DE LA API
// const url = 'http://localhost:3000/videos';
const url =
  'https://my-json-server.typicode.com/mikequeve/aluraflix-api/videos';

// ARREGLO QUE ALMACENA LAS CATEGORIAS DE LOS VIDEOS Y SU COLOR BASE
const categories = [
  {
    title: 'front-end',
    color: '#6bd1ff',
  },
  {
    title: 'back-end',
    color: '#00c86f',
  },
  {
    title: 'innovacion y gestion',
    color: '#ffba05',
  },
];

const GlobalContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);

  // Cargar la informacion desde la fake api
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  // Abrir modal de formulario
  const openModal = (data) => {
    setIsModalOpen(true);
    setDataToEdit(data);
  };

  // Cerrar modal de formulario
  const closeModal = () => {
    setIsModalOpen(false);
    setDataToEdit(null);
  };

  // Agregar nuevo video
  const addNewVideo = (data) => {
    data.id = Date.now();
    setVideos([...videos, data]);
  };

  // Editar la información de cada video
  const updateVideoInfo = (data) => {
    let newInfo = videos.map((el) => (el.id === data.id ? data : el));
    setVideos(newInfo);
  };

  // Eliminar la informacion de un video
  const deleteVideo = (id) => {
    let isDelete = window.confirm(
      '¿Está seguro que desea eliminar el elemento del registro?'
    );
    if (isDelete) {
      let newInfo = videos.filter((video) => video.id !== id);
      setVideos(newInfo);
    } else {
      return;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        videos,
        categories,
        isModalOpen,
        openModal,
        closeModal,
        dataToEdit,
        setDataToEdit,
        addNewVideo,
        updateVideoInfo,
        deleteVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
