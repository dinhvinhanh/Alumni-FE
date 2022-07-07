import * as React from 'react';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import { Box } from '@mui/material';
import LogoImage from './assets/logo.png'

const TopHeader = () => {
  const classes = useStyles();
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container width={1300} spacing={12} justifyContent={'space-between'}>
        <Grid item xl={6}>
          <div className="flex">
            <img src={LogoImage} alt="" width={50} height={50}/>
            <div>
              <h1>Mạng lưới cựu sinh viên</h1>
              <h1>TRƯỜNG ĐẠI HỌC QUỐC GIA</h1>
            </div>
          </div>
        </Grid>
        <Grid item xl={'auto'}>
          <div className="flex">
            <div>Truong dai hoc quoc gia</div>
            <div>Lien he</div>
          </div>
        </Grid>
      </Grid>
        <div className={'text-4xl'}>ko</div>

    </Box>
  );
};

export default TopHeader;