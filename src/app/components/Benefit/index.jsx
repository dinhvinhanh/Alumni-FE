import * as React from 'react';
import useStyles from './styles';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useHistory } from 'react-router-dom';

export default function Benefit({ bgImage }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
    }} className={`${classes.wrapper} p-3 md:p-0`}>
      <div className={`${classes.overlay} absolute top-0 left-0 right-0 bottom-0`}></div>
      <div className={`${classes.content} mx-auto w-fit`}>
        <h1 className={'uppercase text-2xl text-white py-10'}>Lợi ích của cựu sinh viên</h1>
        <div className={`${classes.contentBody} `}>
          <p className={'text-sm text-white my-2'}>
            Nắm bắt cơ hội giúp phát triển nghề nghiệp, tăng cường mối quan hệ, góp phần vào lợi ích chung của cộng đồng cựu sinh viên UET.
          </p>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#015198',
            }}
            color="secondary"
            startIcon={<FavoriteIcon />}
            className={'my-4'}
            onClick={() => history.push('/login')}
          >
            Khám phá ngay
          </Button>
          <p className="my-2 text-white md:w-11/12">
            Duy trì kết nối và tương tác mọi lúc, mọi nơi trên mọi thiết bị thông qua ứng dụng  trên nền tảng máy tính và di động.
          </p>
        </div>
      </div>
    </div>
  );
}
