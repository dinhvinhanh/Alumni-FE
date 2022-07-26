import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CKEditor } from 'ckeditor4-react';
import CustomInput from '../../components/CustomInput';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={'border-2'}>
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
          <div className={'mb-5'}>
            <h1 className={'font-bold my-2'}>Tiêu đề bài viết</h1>
            <CustomInput />
          </div>
          <div className={'mt-6'}>
            <h1 className={'font-bold mb-2 mt-4'}>Nội dung bài viết</h1>
            <CKEditor config={{
              height: '500px',
            }}/>
          </div>
          <div className={'flex justify-end mt-8'}>
            <Button variant="contained" endIcon={<SendIcon />} className={'bg-blue-600'}>
              Đăng bài
            </Button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Quan ly bai dang
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
