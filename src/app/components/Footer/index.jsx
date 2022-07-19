import * as React from 'react';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';

export default function Footer() {
  return (
    <footer className={' text-white mt-10'}>
      <Box style={{ display: 'flex', justifyContent: 'center' }} className={'bg-primary'}>
        <Grid container width={1200} spacing={12} paddingY={5}>
          <Grid item xl={2}>
            <img src={'https://www.fit.uet.vnu.edu.vn/wp-content/themes/fit2019/images/fit-logo.svg'} alt=''/>
          </Grid>
          <Grid item xl={6}>
            <h1 className="uppercase mb-3">Mạng lưới cựu sinh viên</h1>
            <p className={'text-sm text-blue-50 leading-7'}>Trường đại học công nghệ thông tin</p>
            <p className={'text-sm text-blue-50 leading-7'}>Địa chỉ: ksdf sdf ksdf asdflsadjf sdf </p>
            <p className={'text-sm text-blue-50 leading-7'}>Điện thoại: ksdf sdf ksdf asdflsadjf sdf </p>
            <p className={'text-sm text-blue-50 leading-7'}>Fax: (84-24) 38345 4545 45</p>
            <p className={'text-sm text-blue-50 leading-7'}>Email: meo@meo.com</p>
          </Grid>
          <Grid item xl={2}>
            <a href="/"><p className={'text-sm text-blue-50 leading-7'}>Giới thiệu</p></a>
            <p className={'text-sm text-blue-50 leading-7'}>Tin tức - Sự kiện</p>
            <p className={'text-sm text-blue-50 leading-7'}>Gương mặt cựu sinh viên</p>
          </Grid>
          <Grid item xl={2}>
            <p className={'text-sm text-blue-50 leading-7'}>Điện thoại: ksdf sdf ksdf asdflsadjf sdf </p>
            <p className={'text-sm text-blue-50 leading-7'}>Fax: (84-24) 38345 4545 45</p>
            <p className={'text-sm text-blue-50 leading-7'}>Email: meo@meo.com</p>
          </Grid>
        </Grid>
      </Box>
      <div className={'bg-primary'}>
        <div
          className={'flex justify-between mx-auto border-t-2 p-4 border-white'}
          style={{ width: '1200px' }}
        >
          <p>	&copy; 2022 - Trường Đại học Quốc Gia, All Rights Reserved |
            <span className={'animate-pulse'}> Powered by Đinh Vĩnh Anh</span>
          </p>
          <div className={'flex'}>
            <FacebookIcon fontSize='large' />
            <EmailIcon fontSize='large' className={'ml-4'}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
