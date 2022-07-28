import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  threeLine: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '15px',
    lineHeight: '18px',
    '-webkit-line-clamp': '3',
    height: '55px',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    [theme.breakpoints.down('sm')]: {
      '-webkit-line-clamp': '2',
      height: '35px',
    }
  },
  imageWrapper: {
    width: 'fit-content',
    marginRight: '16px',
    '& img': {
      borderRadius: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      '& img': {
        height: '65px',
        marginTop: '8px'
      }
    }
  },
  postWrapper: {
    width: '70%',
  },
  time: {
    color: 'gray',
    fontSize: '15px',
  }
}));
export default useStyles;