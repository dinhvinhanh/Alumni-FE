import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { Event } from 'app/containers/Event';
import AlumniFace from 'app/containers/AlumniFace';
import IntroCard from 'app/components/IntroCard';

export function AboutPage() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid container width={1300} spacing={12} paddingY={5}>
        <Grid item xl={12}>
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