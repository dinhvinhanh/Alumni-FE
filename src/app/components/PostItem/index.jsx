import * as React from 'react';
import useStyles from './styles';
import { useEffect, useRef, useState } from 'react';

export function PostItem(props) {
  const classes = useStyles();
  const { url, time, title, description, image } = props.data;
  const [responsive, setResponsive] = useState('');
  const ref = useRef();
  useEffect(() => {
    if (ref.current?.offsetWidth > 700) {
      setResponsive('lg:absolute lg:bottom-2 lg:right-2 lg:text-black');
    }
  }, [ref.current?.offsetWidth]);
  return (
    <a href={url} className={'flex mt-2 mb-4 border-b-2 border-slate-100 pb-4 relative'} ref={ref}>
      <div className={classes.imageWrapper}>
        <img src={image} alt='post' />
      </div>
      <div className={classes.postWrapper}>
        <span className={`${classes.time} text-gray-300 ${responsive}`} >{time}</span>
        <h2 className={'font-bold'}>{title}</h2>
        <p className={classes.threeLine}>{description}</p>
      </div>
    </a>
  );
};