import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import Logo from 'app/containers/HeaderWrapper/assets/logo.png';

export default function Footer() {
  return (
    <footer className={' text-white mt-10'}>
      <div className={'bg-primary px-6'}>
        <div className={'w-container py-5 flex-col flex md:flex-row justify-between mx-auto'}>
          <div className={'w-3/12 hidden md:block'}>
            <img src={Logo} alt='' className={'w-6/12'}/>
          </div>
          <div className={'md:w-4/12'}>
            <h1 className="uppercase mb-3 text-center md:text-left font-bold md:font-medium">Mạng lưới cựu sinh viên</h1>
            <p className={'text-sm text-blue-50 leading-7 md:text-left text-center'}>Trường Đại học Công nghệ, Đại học Quốc Gia Hà Nội</p>
            <p className={'text-sm text-blue-50 leading-7 md:text-left text-center'}>Địa chỉ: E3, 144 Xuân Thủy, Cầu Giấy, Hà Nội</p>
            <p className={'text-sm text-blue-50 leading-7 md:text-left text-center'}>Điện thoại: 024.37547.461</p>
            <p className={'text-sm text-blue-50 leading-7 md:text-left text-center'}>Fax: 024.37547.460</p>
            <p className={'text-sm text-blue-50 leading-7 md:text-left text-center'}>Email: uet@vnu.edu.vn</p>
          </div>
          <div className={'w-3/12 hidden md:block'}>
            <a href="/"><p className={'text-sm text-blue-50 leading-7'}>Giới thiệu</p></a>
            <p className={'text-sm text-blue-50 leading-7'}>Tin tức - Sự kiện</p>
            <p className={'text-sm text-blue-50 leading-7'}>Gương mặt cựu sinh viên</p>
          </div>
          <div className={'w-2/12 hidden md:block'}>
            <p className={'text-sm text-blue-50 leading-7'}>Chia sẻ </p>
            <p className={'text-sm text-blue-50 leading-7'}>Hợp tác </p>
            <p className={'text-sm text-blue-50 leading-7'}>Cơ hội việc làm</p>
          </div>
        </div>
      </div>
      <div className={'bg-primary'}>
        <div
          className={'flex justify-between mx-auto border-t-2 p-4 border-white'}
          style={{ width: '1200px' }}
        >
          <p className={'text-sm flex flex-col md:flex-row'}>
            <span>&copy; 2022 - Trường Đại học Quốc Gia Hà Nội, All Rights Reserved |</span>
            <span className={'animate-pulse text-center'}> Powered by Đinh Vĩnh Anh</span>
          </p>
          <div className={'md:flex hidden'}>
            <FacebookIcon fontSize='large' />
            <EmailIcon fontSize='large' className={'ml-4'}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
