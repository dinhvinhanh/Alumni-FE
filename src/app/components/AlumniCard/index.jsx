import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useStyles from './styles';

export default function AlumniCard() {
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
            image="https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
            alt="green iguana"
            classes={{
              img: classes.imageCard,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
