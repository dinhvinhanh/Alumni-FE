import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import AlumniControl from 'app/containers/AlumniControl';
import PostControl from 'app/containers/PostControl';
import AccountControl from 'app/containers/AccountControl';
import Logo from 'app/containers/HeaderWrapper/assets/logo.png';
import StatisticControl from 'app/containers/StatisticControl';
import SurveyControl from '../../containers/SurveyControl';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const NAV_TEXT = {
  '/admin': 'Quản lý cựu sinh viên',
  '/admin/cuu-sinh-vien': 'Quản lý cựu sinh viên',
  '/admin/bai-viet': 'Quản lý bài viết',
  '/admin/tai-khoan': 'Quản lý tài khoản'
}

export default function AdminPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: 'blue' }}>
        <Toolbar style={{ background: '#3d3d3d'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className={'uppercase text-white font-bold'}>
            {NAV_TEXT[location.pathname]}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="flex items-center justify-items-start relative -left-4">
            <Link to={'/admin'}>
              <img
                src={Logo}
                className={'w-12 cursor-pointer'}
                alt=""
              />
            </Link>
            <Link to={'/admin'}>
              <h1 className={'font-bold ml-3 cursor-pointer uppercase'}>ALUMNI-UET</h1>
            </Link>
          </div>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { title: 'Cựu sinh viên', link: 'cuu-sinh-vien' },
            { title: 'Bài viết', link: 'bai-viet' },
            { title: 'Tài khoản', link: 'tai-khoan' },
            { title: 'Khảo sát', link: 'khao-sat' },
            { title: 'Thống kê ', link: 'thong-ke' }
          ].map((value, index) => (
            <Link to={`/admin/${value.link}`} key={index}>
              <ListItem  disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={value.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { title: 'Thông báo', link: '/admin/thong-bao' },
            { title: 'Quay về trang chủ', link: '/' },
            { title: 'Đăng xuất', link: '/' }
          ].map((value, index) => (
            <Link to={`${value.link}`} key={index} >
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={value.title} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <div component="main" style={{ width: '80%', flexGrow: 1, padding: 30 }}>
        <DrawerHeader />
        <Switch>
          <Route path={'/admin/bai-viet'} component={PostControl} />
          <Route path={'/admin/tai-khoan'} component={AccountControl} />
          <Route path={'/admin/thong-ke'} component={StatisticControl} />
          <Route path={'/admin/khao-sat'} component={SurveyControl} />
          <Route path={['/admin', '/admin/cuu-sinh-vien']} component={AlumniControl} />
        </Switch>
      </div>
    </div>
  );
}
