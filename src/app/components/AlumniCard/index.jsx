import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useStyles from './styles';

export default function AlumniCard({ title, description, thumbnail, time}) {
  const classes = useStyles();
  return (
    <div className="" style={{
      width: '100%',
    }}>
      <Card sx={{ maxWidth: 345, margin: '15px', marginBottom: '45px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100"
            image={thumbnail}
            alt="green iguana"
            classes={{
              img: classes.imageCard,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {time}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
