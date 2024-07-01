import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBtn = ({ url, children }) => {
  return (
    <Link to={url} className='site__header-link center'>
      {children}
    </Link>
  );
};

export default HeaderBtn;
