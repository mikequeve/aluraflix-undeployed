import React from 'react';
import img from '/img/video-1.png';
import Title from '../Title';

const Banner = () => {
  return (
    <section
      className='site__banner center'
      style={{ backgroundImage: 'url(/img/img-banner.png)' }}
    >
      <div className='site__banner-overlay'></div>
      <article className='container center'>
        <div className='site__banner-text--container center'>
          <Title color='#6bd1ff'>
            <h2>Front end</h2>
          </Title>
          <h1 className='site__title'>Challenge React</h1>
          <p className='site__banner-text'>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <div
          className='site_banner-video'
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </article>
    </section>
  );
};

export default Banner;
