import * as React from 'react';
import { Slide } from 'react-slideshow-image';
import Grid from '@mui/material/Grid';
import 'react-slideshow-image/dist/styles.css'
import { Box } from '@mui/material';
import { News } from 'app/containers/News';
import { Event } from 'app/containers/Event';
import AlumniFace from 'app/containers/AlumniFace';
const slideImages = [
  {
    url: 'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.w3schools.com/w3css/img_lights.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.stack.imgur.com/QqRWG.jpg',
    caption: 'Slide 3'
  },
];

export function HomePage() {
  return (
    <div>
      <Slide>
        {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <img src={slideImage.url} alt=""
               style={{
                 width: '100%',
                 height: 600,
               }}
            />
          </div>
        ))}
      </Slide>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container width={1300} spacing={12} paddingY={5}>
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
  );
};