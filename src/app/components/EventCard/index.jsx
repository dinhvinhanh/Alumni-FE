import * as React from 'react';
import useStyles from './styles';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EditLocationIcon from '@mui/icons-material/EditLocation';

export function EventCard(props) {
  const classes = useStyles();
  const { url, time, title, location } = props.data;
  return (
    <a href="/" className={'mt-2 mb-4 border-slate-100 pb-4 select-none'}>
      <div className={classes.imageWrapper}>
        <img src={url} alt='post' className={'select-none'} style={{
          height: '350px'
        }}/>
      </div>
      <div className={classes.postWrapper}>
        <h2 className={'font-bold uppercase mt-6 mb-4'}>{title}</h2>
        <div>
          <AccessAlarmIcon color={'disabled'}/>
          <span className={'mx-1.5 text-gray-500'}>Thời gian:</span>
          <span className={' text-red-900 font-bold'}>{time}</span>
        </div>
        <div className={'flex my-2'}>
          <EditLocationIcon color={'disabled'} />
          <span className={'mx-1.5 text-gray-500'}>Địa điểm:</span>
          <p className={'text-black'}>{location}</p>
        </div>
      </div>
      <a href='/news' className={`${classes.viewMore} float-right text-black hover:underline hover:text-red-900 italic text-slate-400`}>Xem thêm</a>
    </a>
  );
};