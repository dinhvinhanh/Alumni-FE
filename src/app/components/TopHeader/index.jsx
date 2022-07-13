import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import LogoImage from './assets/logo.png'

const TopHeader = () => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }} className={'my-4'}>
      <Grid container width={1260} spacing={12} justifyContent={'space-between'}>
        <Grid item  xl={6}>
          <div className="flex">
            <img src={LogoImage} alt="" width={50} height={50}/>
            <div className={'text-red-900 font-bold ml-4'}>
              <h1>Mạng lưới cựu sinh viên</h1>
              <h1>TRƯỜNG ĐẠI HỌC QUỐC GIA</h1>
            </div>
          </div>
        </Grid>
        <Grid item xl={'auto'} className={'flex'}>
            <a href={'/'} className={'flex items-center text-red-900 font-bold ml-6'}>Truong dai hoc quoc gia</a>
            <a href={'/'} className={'flex items-center text-red-900 font-bold ml-6'}>Lien he</a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopHeader;