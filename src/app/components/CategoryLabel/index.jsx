import * as React from 'react';

const CategoryLabel = (props) => {
  const { text, url } = props;
  return (
    <a href={url}>
      <h1 className={'text-xl md:text-2xl font-bold uppercase text-cyan-900 border-l-4 border-cyan-900 pl-2.5 mt-4 mb-4 '}>{text}</h1>
    </a>
  );
};

export default CategoryLabel;