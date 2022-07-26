import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useStyles from './styles';
import CategoryLabel from 'app/components/CategoryLabel';

export default function IntroCard({ image, url, title, description, label}) {
  const classes = useStyles();
  return (
    <div>
      <Card classes={{
        root: 'shadow-cyan-500/50 border-1',
      }} href={url}>
        <CardActionArea>

          <CardContent>
            <CategoryLabel url={url} text={label} />
            <CardMedia
              component="img"
              height="140"
              classes={{
                img: classes.imageCard,
              }}
              image={image}
              alt="green iguana"
            />
            <Typography gutterBottom variant="h5" component="div" className={'mt-6'}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
