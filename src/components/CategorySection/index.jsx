import React from 'react';
import Title from '../Title';
import Card from '../Card/Card';

const CategorySection = (props) => {
  const { color, title } = props.data;
  const { videos } = props;

  return (
    <section className='category__section center'>
      <div className='container'>
        <Title color={color}>
          <h3>{title}</h3>
        </Title>
        <div className='category__section-card-container center'>
          {videos.map((video, index) => (
            <Card data={video} key={index} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
