import * as React from 'react';
import Button from '@mui/material/Button';
import IntroImage from './assets/ugroup.png';
import SearchBox from '../../components/SearchBox';

export function HeaderWrapper() {
  return (
    <div className={'py-6'}>
      {/* app bar */}
      <div className="w-container flex justify-between mx-auto">
        {/* left header */}
        <div className="flex items-center">
          <img
            src="https://uet.vnu.edu.vn/wp-content/uploads/2017/02/logo2_new.png"
            className={'w-12'}
            alt=""
          />
          <h1 className={'font-bold ml-3'}>VNU-UET</h1>
          <div className={'bg-blue-100 px-2 py-1 ml-4 rounded text-blue-900 text-sm'}>Join the community</div>
        </div>

        {/* right header */}
        <div className={'flex items-center'}>
          <div className={'text-blue-700 cool-link cursor-pointer ml-6'}>Trang chủ</div>
          <div className={'text-blue-700 cool-link cursor-pointer ml-6'}>Tin tức - Sự kiện</div>
          <div className={'text-blue-700 cool-link cursor-pointer ml-6'}>Gương mặt cựu sinh viên</div>
          <div className={'text-blue-700 cool-link cursor-pointer ml-6'}>Cơ hội việc làm</div>
          <Button variant="outlined" className={'ml-6'}>Đăng nhập</Button>
        </div>
      </div>

      <div className="w-container mx-auto flex justify-end">
        <SearchBox className={'border-blue-300 border mt-4'} />
      </div>

      {/* introducing header */}
      <div className="w-container justify-between mx-auto">
        <div className={'flex justify-between'}>
          <div
            className={'flex justify-center flex-col'}
            style={{ width: '40%' }}
          >
            <h1 className={'font-bold text-2xl text-cyan-900'}>Mạng lưới cựu sinh viên</h1>
            <p className={'text-cyan-800 my-6'}>
              Nắm bắt cơ hội giúp phát triển nghề nghiệp, tăng cường mối quan hệ, góp phần vào lợi ích chung của cộng đồng cựu sinh viên.
              Duy trì kết nối và tương tác mọi lúc, mọi nơi trên mọi thiết bị.
            </p>
            <Button variant="contained" className={'w-40 mt-2 p-2 bg-blue-600'}>Bắt đầu ngay</Button>
          </div>
          <div className={'flex items-center'} style={{height: '500px'}}>
            <img src={IntroImage} alt={''}/>
          </div>
        </div>
      </div>
    </div>
  );
};