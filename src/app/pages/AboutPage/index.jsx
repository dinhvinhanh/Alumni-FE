import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Breadcrumbs } from '@mui/material';
import IntroCard from 'app/components/IntroCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export function AboutPage() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
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
            description={'Với 11 ngành ngoại ngữ; 6 chuyên ngành khác ngoài ngôn ngữ, dạy-học hoàn toàn bằng ngoại ngữ; 6 trung tâm đào tạo và hợp tác quốc tế… Trường Đại học Hà Nội tự hào là cơ sở giáo dục hàng đầu của cả nước trong đào tạo, nghiên cứu về ngoại ngữ và chuyên ngành bằng ngoại ngữ. '}
            image={'https://i2.connections.vn/cdn.inevn.com/img/thumb/19220.1kx.isij?w=893&quality=100&strip=all'}
            label={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
            title={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
            url={'/'}
          />
        </Grid>
        <Grid item xl={12} className="flex">
          <Grid item xl={4} className="p-3">
            <IntroCard
              description={'Với 11 ngành ngoại ngữ; 6 chuyên ngành khác ngoài ngôn ngữ, dạy-học hoàn toàn bằng ngoại ngữ; 6 trung tâm đào tạo và hợp tác quốc tế… Trường Đại học Hà Nội tự hào là cơ sở giáo dục hàng đầu của cả nước trong đào tạo, nghiên cứu về ngoại ngữ và chuyên ngành bằng ngoại ngữ. '}
              image={'https://i2.connections.vn/cdn.inevn.com/img/thumb/19220.1kx.isij?w=893&quality=100&strip=all'}
              label={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
              title={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
              url={'/'}
            />
          </Grid>
          <Grid item xl={4} className="p-3">
            <IntroCard
              description={'Với 11 ngành ngoại ngữ; 6 chuyên ngành khác ngoài ngôn ngữ, dạy-học hoàn toàn bằng ngoại ngữ; 6 trung tâm đào tạo và hợp tác quốc tế… Trường Đại học Hà Nội tự hào là cơ sở giáo dục hàng đầu của cả nước trong đào tạo, nghiên cứu về ngoại ngữ và chuyên ngành bằng ngoại ngữ. '}
              image={'https://i2.connections.vn/cdn.inevn.com/img/thumb/19220.1kx.isij?w=893&quality=100&strip=all'}
              label={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
              title={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
              url={'/'}
            />
          </Grid>
          <Grid item xl={4} className="p-3">
            <IntroCard
              description={'Với 11 ngành ngoại ngữ; 6 chuyên ngành khác ngoài ngôn ngữ, dạy-học hoàn toàn bằng ngoại ngữ; 6 trung tâm đào tạo và hợp tác quốc tế… Trường Đại học Hà Nội tự hào là cơ sở giáo dục hàng đầu của cả nước trong đào tạo, nghiên cứu về ngoại ngữ và chuyên ngành bằng ngoại ngữ. '}
              image={'https://i2.connections.vn/cdn.inevn.com/img/thumb/19220.1kx.isij?w=893&quality=100&strip=all'}
              label={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
              title={'GIỚI THIỆU MẠNG LƯỚI CỰU SINH VIÊN'}
              url={'/'}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};