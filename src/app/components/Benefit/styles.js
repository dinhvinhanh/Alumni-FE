import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  overlay: {
    backgroundColor: 'rgba(113,108,108,0.8)',
    zIndex: 100,
    height: '100%',
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '480px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'auto',
  },
  content: {
    position: 'relative',
    zIndex: 1000,
  },
  contentBody: {
    width: '100%',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0,0,0,0.8)',
  }
}));
export default useStyles;