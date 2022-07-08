import * as React from 'react';
import useStyles from './styles';

export function PostItem(props) {
  const classes = useStyles();
  const { url, time, title, description } = props.data;
  return (
    <div className={'flex mt-2 mb-4 border-b-2 border-slate-100 pb-4'}>
      <div className={classes.imageWrapper}>
        <img src={url} alt='post' />
      </div>
      <div className={classes.postWrapper}>
        <span className={classes.time}>{time}</span>
        <h2 className={'font-bold'}>{title}</h2>
        <p className={classes.threeLine}>{description}</p>
      </div>
    </div>
  );
};