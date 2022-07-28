import * as React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { News } from 'app/containers/News';
import { Event } from 'app/containers/Event';
import AlumniFace from 'app/containers/AlumniFace';
import Benefit from '../../components/Benefit';
import IntroPage from '../../containers/IntroPage';
import { Helmet } from 'react-helmet-async';
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>
      <IntroPage />
      <div className="w-container p-3 md:p-0 mx-auto md:flex justify-between">
        <News className={'md:w-7/12'}/>
        <Event className={'md:w-4/12'}/>
      </div>
      <div className="w-container mx-auto p-3 md:p-0">
        <AlumniFace />
      </div>
      <Benefit bgImage={'https://uet.vnu.edu.vn/en/wp-content/uploads/2020/05/IMG_8402.jpg'} />
    </>
  );
};