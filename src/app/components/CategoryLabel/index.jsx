import * as React from 'react';
import { Link } from 'react-router-dom';

const CategoryLabel = (props) => {
  const { text, url } = props;
  return (
    <Link to={url}>
      <h1 className={'text-xl md:text-2xl font-bold uppercase text-cyan-900 border-l-4 border-cyan-900 pl-2.5 mt-4 mb-4 '}>{text}</h1>
    </Link>
  );
};

export default CategoryLabel;