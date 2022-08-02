import * as React from 'react';
import useStyles from './styles';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';
import config from '../../../config';

export function EventCard(props) {
  const classes = useStyles();
  const { slug, updateAt, title, location, thumbnail } = props.data;
  return (
    <div className={'mt-2 mb-4 border-slate-100 pb-4 select-none'}>
      <Link to={`/post/${slug}`}  className={classes.imageWrapper}>
        <img src={config.apiEndpoint + thumbnail} alt='post' className={'select-none'} style={{
          height: '350px'
        }}/>
      </Link>
      <div className={classes.postWrapper}>
        <Link to={`/post/${slug}`}  className={'font-bold uppercase mt-6 mb-4'}>{title}</Link>
        <div>
          <AccessAlarmIcon color={'disabled'}/>
          <span className={'mx-1.5 text-gray-500'}>Thời gian:</span>
          <span className={' text-red-900 font-bold'}>{dateFormat(updateAt, 'HH:MM dd/mm/yyyy')}</span>
        </div>
        <div className={'flex my-2'}>
          <EditLocationIcon color={'disabled'} />
          <span className={'mx-1.5 text-gray-500'}>Địa điểm:</span>
          <p className={'text-black'}>{location}</p>
        </div>
      </div>
      <div href='/news' className={`${classes.viewMore} float-right text-black hover:underline hover:text-red-900 italic text-slate-400`}>Xem thêm</div>
    </div>
  );
};