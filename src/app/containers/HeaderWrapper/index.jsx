import * as React from 'react';
import Button from '@mui/material/Button';
import SearchBox from '../../components/SearchBox';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './assets/logo.png';

export function HeaderWrapper() {

  return (
    <div className={'py-6 px-3 md:px-0 '}>
      {/* app bar */}
      <div className="w-container flex justify-between mx-auto">
        {/* left header */}
        <div className="flex items-center">
          <Link to={'/'}>
            <img
              src={Logo}
              className={'w-12 cursor-pointer'}
              alt=""
            />
          </Link>
          <Link to={'/'}>
            <h1 className={'font-bold ml-3 cursor-pointer'}>VNU-UET</h1>
          </Link>
          <div className={'bg-blue-100 px-0 md:px-2 py-1 ml-4 rounded text-blue-900 text-sm animate-pulse cursor-pointer text-center'}>Join the alumni community</div>
        </div>

        <div className="inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu" aria-expanded="false">
            <MenuIcon />
          </button>
        </div>

        <div className="hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#1" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
               aria-current="page">Dashboard</a>

            <a href="#1"
               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#1"
               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#1"
               className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>

        {/* right header */}
        <div className={'items-center hidden md:flex'}>
          <Link to={'/'} className={'text-blue-700 cool-link cursor-pointer ml-6'}>Trang chủ</Link>
          <Link to={'/about'} className={'text-blue-700 cool-link cursor-pointer ml-6'}>Giới thiệu</Link>
          <Link to={'/tin-tuc'} className={'text-blue-700 cool-link cursor-pointer ml-6'}>Tin tức</Link>
          <Link to={'/su-kien'} className={'text-blue-700 cool-link cursor-pointer ml-6'}>Sự kiện</Link>
          <Link to={'/guong-mat-cuu-sinh-vien'} className={'text-blue-700 cool-link cursor-pointer ml-6'}>Gương mặt cựu sinh viên</Link>
          <Link to={'/login'} className={'ml-6'}><Button variant="outlined">Đăng nhập</Button></Link>
        </div>
      </div>

      <div className="w-container mx-auto flex justify-end">
        <SearchBox className={'border-blue-300 border mt-4'} />
      </div>
    </div>
  );
};