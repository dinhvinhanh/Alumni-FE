import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Breadcrumbs } from '@mui/material';
import IntroCard from 'app/components/IntroCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Helmet } from 'react-helmet-async';
import NetworkImg from './assets/img.png';

export function AboutPage() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Helmet>
        <title>Giới thiệu</title>
      </Helmet>
      <Grid container width={1200} spacing={12} paddingY={5}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            className={'uppercase'}
          >
            {[
              <a href={'/dashboard'}>admin</a>,
              <a href={'/dashboard'}>user</a>,
            ]}
          </Breadcrumbs>
        </Grid>
        <Grid item xl={12} style={{ paddingTop: '20px' }}>
          <IntroCard
            description={'Nắm bắt cơ hội giúp phát triển nghề nghiệp, tăng cường mối quan hệ, góp phần vào lợi ích chung của cộng đồng cựu sinh viên. Duy trì kết nối và tương tác mọi lúc, mọi nơi trên mọi thiết bị.'}
            image={'https://sotaytuyensinh.vn//uploads/diem-chuan-dh-cong-nghe%20ha%20noi-min.jpg'}
            label={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
            title={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
            url={'/'}
          />
        </Grid>
        <Grid item xl={12} className="md:flex">
          <Grid item xl={4} sm={12} xs={12} className="p-3">
            <IntroCard
              description={'  Để hoàn thiện việc Khảo sát tình hình việc làm của sinh viên theo yêu cầu của Bộ Giáo dục và Đào tạo, đồng thời có thông tin đầy đủ làm cơ sở cải thiện công tác quản lý, hỗ trợ sinh viên, góp phần nâng cao chất lượng đào tạo đáp ứng... '}
              image={NetworkImg}
              label={'GIỚI THIỆU'}
              title={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN UET'}
              url={'/'}
            />
          </Grid>
          <Grid item xl={4} sm={12} xs={12} className="p-3">
            <IntroCard
              description={'Ban điều hành giữ vai trò vô cùng quan trọng trong việc định hướng chiến lược phát triển Mạng lưới Cựu sinh viên. ' +
                'Ban điều hành có nhiệm vụ điều hướng và quản lý Ban phát triển mạng lưới, Ban nội dung, và Ban hậu cần...'}
              image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqNXBrLobxdjJYhDo0TcABtB2lSXwcNX_jTXZnjlpEIYiPiDt1monhCCAbK5XBA0BZGE&usqp=CAU'}
              label={'BAN ĐIỀU HÀNH'}
              title={'BAN ĐIỀU HÀNH MẠNG LƯỚI CỰU SINH VIÊN'}
              url={'/'}
            />
          </Grid>
          <Grid item xl={4} sm={12} xs={12} className="p-3">
            <IntroCard
              description={'Mạng lưới Cựu sinh viên ra đời với vai trò là cầu nối giữa Trường Đại học Quốc gia Hà Nội và Cựu sinh viên các khóa. Thứ nhất, nhiệm vụ cơ bản và quan trọng nhất của Mạng lưới Cựu sinh viên là...'}
              image={'https://uet.vnu.edu.vn/wp-content/uploads/2022/04/photo1649046243043-1649046243145168669028.png'}
              label={'CHỨC NĂNG, NHIỆM VỤ'}
              title={'CHỨC NĂNG NHIỆM VỤ MẠNG LƯỚI ALUMNI'}
              url={'/'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};