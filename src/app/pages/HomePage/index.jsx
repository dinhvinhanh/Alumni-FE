import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import Grid from '@mui/material/Grid';
import 'react-slideshow-image/dist/styles.css'
import { Box } from '@mui/material';
import { News } from 'app/containers/News';
import { Event } from 'app/containers/Event';
import AlumniFace from 'app/containers/AlumniFace';
import Benefit from '../../components/Benefit';
import IntroPage from '../../containers/IntroPage';
const slideImages = [
  {
    url: 'https://www.fit.uet.vnu.edu.vn/wp-content/uploads/2019/06/Tot-nghiep.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://uet.vnu.edu.vn/wp-content/uploads/2017/04/MG_7643-1.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://uet.vnu.edu.vn/wp-content/uploads/2017/04/Thanh-nien-Truong-DHCN-1.jpg',
    caption: 'Slide 3'
  },
];

export function HomePage() {
  return (
    <>
      <div>
        <IntroPage />
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container width={1200} spacing={12}>
            <Grid item xl={7}>
              <News />
            </Grid>
            <Grid item xl={5}>
              <Event />
            </Grid>
            <Grid item xl={12}>
              <AlumniFace />
            </Grid>
          </Grid>
        </Box>
      </div>
      <Benefit bgImage={'https://i1.connections.vn/alumni.hanu.vn/img/N2.jpg?resize=1907,481&quality=100&strip=all'} />
    </>
  );
};