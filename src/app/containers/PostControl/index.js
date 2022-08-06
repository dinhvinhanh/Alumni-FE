import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PostItem } from 'app/components/PostItem';
import { Pagination } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PostForm from 'app/components/PostForm';
import { useGetListPost } from 'queries/alumni';
import dateFormat from 'dateformat';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function PostControl() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { data: posts, isSuccess, refetch } = useGetListPost('PENDING,APPROVED,HIDDEN', 1, 25);
  console.log(posts)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={'border-2'}>
      <Helmet>
        <title>Quản lý bài viết</title>
      </Helmet>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ background: '#3d3d3d'}}
        >
          <Tab label="Đăng bài" className={'font-bold uppercase'} {...a11yProps(0)} />
          <Tab label="Quản lý bài đăng" className={'font-bold uppercase'} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PostForm />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {isSuccess && (
            posts.content.map((value, index) => {
              return <PostItem data={{ ...value }} controlMode={true} refetch={refetch}  key={index}/>
            })
          )}
          <div className={'flex justify-end mb-2 mt-9'}>
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
