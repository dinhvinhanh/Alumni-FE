import * as React from 'react';
import useStyles from './styles';

const CategoryLabel = (props) => {
  const { text, url } = props;
  const classes = useStyles();
  return (
    <a href={url}>
      <h1 className={'text-2xl font-bold uppercase text-red-900 border-l-4 border-red-900 pl-2.5 mt-4 mb-4'}>{text}</h1>
    </a>
  );
};

export default CategoryLabel;