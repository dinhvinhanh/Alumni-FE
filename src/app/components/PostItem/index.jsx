import * as React from 'react';
import useStyles from './styles';
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export function PostItem(props) {
  const classes = useStyles();
  const { url, time, title, description, image, controlMode } = props.data;
  const [responsive, setResponsive] = useState('');
  const ref = useRef();
  useEffect(() => {
    if (ref.current?.offsetWidth > 700) {
      setResponsive('lg:absolute lg:bottom-2 lg:right-2 lg:text-black');
    }
  }, [ref.current?.offsetWidth]);
  return (
    <Link to={url} className={'flex mt-2 mb-4 border-b-2 border-slate-100 pb-4 relative'} ref={ref}>
      <div className={classes.imageWrapper}>
        <img src={image} alt='post' className={'w-36 md:h-44 max-h-40 md:w-64'}/>
      </div>
      <div className={classes.postWrapper}>
        <span className={`${classes.time} text-gray-300 ${responsive}`} >{time}</span>
        <h2 className={'font-bold'}>{title}</h2>
        <p className={classes.threeLine}>{description}</p>
      </div>
      {/* options */}
      {controlMode && (<div className={'w-2/12 flex flex-col'}>
        <Button variant={'outlined'} startIcon={<TaskAltIcon />} className={'ml-7 mt-2'}
                color={'success'}>Duyệt</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} className={'ml-7 mt-2'} color={'error'}>
          Delete
        </Button>
        <Button variant={'outlined'} className={'ml-7 mt-2'} startIcon={<EditIcon />} color={'warning'}>Chỉnh
          sửa</Button>
      </div>)}
    </Link>
  );
};