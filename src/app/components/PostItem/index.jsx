import * as React from 'react';
import useStyles from './styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import config from '../../../config';

export function PostItem(props) {
  const classes = useStyles();
  const { slug, updateAt, title, content, thumbnail, controlMode } = props.data;
  const description = useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.innerText;
  }, [content])

  const [responsive, setResponsive] = useState('');
  const ref = useRef();
  useEffect(() => {
    if (ref.current?.offsetWidth > 700) {
      setResponsive('lg:absolute lg:bottom-2 lg:right-2 lg:text-black');
    }
  }, [ref.current?.offsetWidth]);
  return (
    <Link to={`/post/${slug}`} className={'flex mt-2 mb-4 border-b-2 border-slate-100 pb-4 relative'} ref={ref}>
      <div className={classes.imageWrapper}>
        <img src={config.apiEndpoint + thumbnail} alt='post' className={'w-36 md:h-44 max-h-40 md:w-64'}/>
      </div>
      <div className={classes.postWrapper}>
        <span className={`${classes.time} text-gray-300 ${responsive}`} >{updateAt}</span>
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