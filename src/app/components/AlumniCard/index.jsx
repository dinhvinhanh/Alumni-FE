import * as React from 'react';
import { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useStyles from './styles';
import config from 'config';
import { Link } from 'react-router-dom';

export default function AlumniCard({ data}) {
  const { title, content, thumbnail, updateAt, slug} = data;
  const description = useMemo(() => {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.innerText.substring(0, 200);
  }, [content])
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
            image={config.apiEndpoint + thumbnail}
            alt="green iguana"
            classes={{
              img: classes.imageCard,
            }}
          />
          <CardContent>
            <Link to={'/post/' + slug}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {updateAt}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
