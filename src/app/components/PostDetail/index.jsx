import * as React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useGetPostDetail } from 'queries/alumni';
import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

export function PostDetail({ match }) {
  const { data: response, isSuccess } = useGetPostDetail('news', match.params.slug);
  const { data } = response || {};
  return (
    <div className={'px-3 md:px-0'}>
      {!isSuccess &&
        (<Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>)}
      <div className={'md:flex mt-2 mb-4 border-b-2 border-slate-100 pb-4 justify-between'}>
        <h1 className={'font-bold text-xl uppercase'}>
          {data && data.title}
        </h1>
        <div className="flex text-xs float-right md:float-none mr-4 md:mr-0">
          <div className="flex items-center">
            <AccessAlarmIcon fontSize={'small'}/> {data && data.createdAt}
          </div>
          <div className="flex items-center ml-4">
            <RemoveRedEyeIcon fontSize={'small'}/> {15} lượt xem
          </div>
        </div>
      </div>
      <div className={'mx-auto'} style={{ width: '80%'}} dangerouslySetInnerHTML={{ __html: data && data.content}}></div>
    </div>
  );
};