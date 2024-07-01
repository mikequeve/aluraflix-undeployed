import React from 'react';

const Title = ({ children, color }) => {
  return (
    <div className='site__banner-title' style={{ backgroundColor: `${color}` }}>
      {children}
    </div>
  );
};

export default Title;
