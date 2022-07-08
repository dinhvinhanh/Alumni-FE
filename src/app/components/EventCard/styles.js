import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  threeLine: {
    color: 'grey',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '15px',
    lineHeight: '18px',
    '-webkit-line-clamp': '3',
    height: '55px',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
  },
  imageWrapper: {
    width: '100%',
    marginRight: '16px',
    '& img': {
      borderRadius: '5px',
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