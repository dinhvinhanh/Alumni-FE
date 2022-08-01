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
import PostForm from '../../components/PostForm';

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
          <PostItem data={{
            url: '/post/slug-bai-viet',
            time: '12:00 24/11/2022',
            title: 'Thử thách lớn nhất là thay đổi tư duy',
            description: ' Là người Việt đầu tiên lọt vào danh sách “10 out of 200” tại HLF 2019, bạn Ngô Khắc Hoàng (27 tuổi) đã chia sẻ với Tuổi Trẻ về hành trình từ trai làng thành một nhà nghiên cứu trẻ có cột mốc nhất định.     Ngô Khắc Hoàng là nghiên cứu […]',
            image: 'https://uet.vnu.edu.vn/wp-content/uploads/2019/10/ban-ngo-khac-hoang-1-read-only-1571149180676305176271.jpg',
            controlMode: true
          }} />
          <PostItem data={{
            url: '/post/slug-bai-viet',
            time: '11:00 11/11/2022',
            title: 'Chương trình học bổng Khoa học công nghệ đào tạo thạc sĩ và tiến sĩ du học của tập đoàn Vingroup năm 2021',
            description: '',
            image: 'https://thietkewebhcm.com.vn/an-featured-image-trong-bai-viet-wordpress/imager_8383.jpg',
            controlMode: true
          }} />
          <PostItem data={{
            url: '/post/slug-bai-viet',
            time: '13:00 24/10/2022',
            title: 'Cựu sinh viên Trần Thế Anh: Kiếm tiền khởi nghiệp với tư duy “không nương tựa ai”',
            description: ' Với tư duy không dựa dẫm vào bố mẹ, chàng trai sinh năm 1997 từng đi làm shipper, làm thêm một lúc 3 nơi để kiếm tiền sinh hoạt, tích cóp cho “ấp ủ” khởi nghiệp riêng. Những trải nghiệp suốt quãng thời gian tuổi trẻ giúp 9x có bài học sâu sắc về […]',
            image: 'https://uet.vnu.edu.vn/wp-content/uploads/2022/04/photo1649046243043-1649046243145168669028.jpg',
            controlMode: true
          }} />
          <PostItem data={{
            url: '/post/slug-bai-viet',
            time: '18:00 14/10/2021',
            title: 'Kyber Network gọi vốn thành công, cựu sinh viên UET nói về khởi nghiệp',
            description: ' Trần Huy Vũ và Lợi Lưu là 2 của cựu sinh viên Trường ĐH Công nghệ – ĐHQGHN đã lập nên kì tích trong việc gọi vốn cho Kyber Network.      Kyber Network chính thức ra mắt công chúng vào tháng 9/2017 và đã gọi vốn được hơn 200.000 Ethereum (tương đương […]',
            image: 'https://uet.vnu.edu.vn/wp-content/uploads/2019/08/2019_08_27_KYBER-NETWORK-1.jpg',
            controlMode: true
          }} />
          <PostItem data={{
            url: '/post/slug-bai-viet',
            time: '12:00 24/11/2022',
            title: 'Chương trình hợp tác và những trải nghiệm thực tế của cựu sinh viên tại Công ty TNHH Nissan Automotive Technology Việt Nam',
            description: '  Trong nhiều năm qua trường Đại học Công nghệ (ĐHQGHN) và Công ty TNHH Nissan Automotive Technology Việt Nam (NATV) đã có những hợp tác trong lĩnh vực đào tạo nguồn nhân lực chất lượng cao. ',
            image: 'https://uet.vnu.edu.vn/wp-content/uploads/2019/03/IMG_3112-409x258.jpg',
            controlMode: true
          }} />

          <div className={'flex justify-end mb-2 mt-9'}>
            <Pagination count={10} variant="outlined" color="primary" />
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
