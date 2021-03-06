import * as React from 'react';
import useStyles from './styles';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Benefit({ bgImage }) {
  const classes = useStyles();
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
    }} className={classes.wrapper}>
      <div className={`${classes.overlay} absolute top-0 left-0 right-0 bottom-0`}></div>
      <div className={`${classes.content} mx-auto w-fit`}>
        <h1 className={'uppercase text-2xl text-white py-10'}>Lợi ích của cựu sinh viên</h1>
        <div className={`${classes.contentBody}`}>
          <p className={'text-sm text-white my-2'}>
            Nắm bắt cơ hội giúp phát triển nghề nghiệp, tăng cường mối quan hệ, góp phần vào lợi ích chung của cộng đồng cựu sinh viên UET.
          </p>
          <Button variant="contained" style={{
            backgroundColor: '#351919',
          }} color="secondary" startIcon={<FavoriteIcon />} bac>
            Khám pha ngay
          </Button>
          <p className="my-2 text-white">
            Duy trì kết nối và tương tác mọi lúc, mọi nơi trên mọi thiết bị thông qua ứng dụng  trên nền tảng máy tính và di động.
          </p>
        </div>
      </div>
    </div>
  );
}
