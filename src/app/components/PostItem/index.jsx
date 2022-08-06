import * as React from 'react';
import useStyles from './styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import config from 'config';
import { useBrowsePost, useDeletePost } from 'mutations/post';
import DraggableDialog from '../DraggableDialog';
import { checkRole } from 'utils/auth';

export function PostItem(props) {
  const { slug, updateAt, title, content, thumbnail, id, status } = props.data;
  const { controlMode, refetch } = props;
  const ref = useRef();
  const classes = useStyles();
  const [responsive, setResponsive] = useState('');
  const deletePost = useDeletePost();
  const browsePost = useBrowsePost();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [confirmBrowse, setConfirmBrowse] = useState(false);

  const description = useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.innerText;
  }, [content])


  useEffect(() => {
    if (ref.current?.offsetWidth > 700) {
      setResponsive('lg:absolute lg:bottom-2 lg:right-2 lg:text-black');
    }
  }, [ref.current?.offsetWidth]);

  const handleShowConfirm = (type) => (event) => {
    event.preventDefault();
    if (type === 'delete')
      setConfirmDelete(true);
    else
      setConfirmBrowse(true);
  }

  const handleDeletePost = async (event) => {
    event.preventDefault();
    await deletePost.mutateAsync(id);
    closeConfirm(event);
    refetch();
  }

  const handleBrowsePost = async (event) => {
    event.preventDefault();
    await browsePost.mutateAsync(id);
    closeConfirm(event);
    refetch();
  }

  const closeConfirm = (event) => {
    event.preventDefault();
    setConfirmDelete(false);
    setConfirmBrowse(false);
  }

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
        <Button
          variant={'outlined'}
          startIcon={<TaskAltIcon />}
          className={'ml-7 mt-2'}
          color={'success'}
          onClick={status !== 'APPROVED' && checkRole('ROLE_ADMIN') ? handleShowConfirm('browse') : () => {}}
        >
          {status === 'APPROVED' ? 'Đã duyệt' : (checkRole('ROLE_ADMIN') ? 'Duyệt' : 'Chờ duyệt')}
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          className={'ml-7 mt-2'} color={'error'}
          onClick={handleShowConfirm('delete')}
        >
          Delete
        </Button>
        <Button variant={'outlined'} className={'ml-7 mt-2'} startIcon={<EditIcon />} color={'warning'}>Xem</Button>
      </div>)}
      <DraggableDialog
        open={confirmDelete}
        handleClose={closeConfirm}
        handleConfirm={handleDeletePost}
        title={'Xác nhận xóa bài viết này!'}
        description={'Khi xác nhận dữ liệu sẽ bị xóa vĩnh viễn tại máy chủ, không thể phục hồi.'}
      />
      <DraggableDialog
        open={confirmBrowse}
        handleClose={closeConfirm}
        handleConfirm={handleBrowsePost}
        title={'Xác nhận duyệt bài viết này!'}
        description={'Khi xác nhận bài viết sẽ hiển thị ở trang chủ'}
      />
    </Link>
  );
};