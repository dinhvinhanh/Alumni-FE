import * as React from 'react';
import Carousel from 'react-multi-carousel';
import CategoryLabel from 'app/components/CategoryLabel';
import 'react-multi-carousel/lib/styles.css';
import AlumniCard from '../../components/AlumniCard';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 4,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

export default function AlumniFace({ deviceType = 'desktop' }) {
  return (
    <div>
      <CategoryLabel url={''} text={'Gương mặt cựu sinh viên'}/>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={true}
          infinite
          itemClass="image-item"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          autoPlay={true}
        >
          <AlumniCard
            title={'“Đam mê” giành học bổng và lập kế hoạch trở thành thủ khoa'}
            description={'Suốt 4 năm học tập tại Trường Đại học Công nghệ (Đại học Quốc gia Hà Nội), Giáp Thị Lương luôn phấn đấu để đạt học bổng và trở thành thủ khoa tốt nghiệp'}
            thumbnail={'https://uet.vnu.edu.vn/wp-content/uploads/2022/06/ava-giap-thi-luong.jpg'}
            time={'05/12/2021'}
          />
          <AlumniCard
            title={'Bí quyết của nam sinh trong 4 năm nhận hai bằng đại học loại'}
            description={'Học một bằng đại học để tốt nghiệp đã không dễ, thế nhưng Nguyễn Hữu Điệp – sinh viên khóa QH-2018-I/CQ Trường Đại học Công nghệ,Đại học Quốc gia Hà Nội'}
            thumbnail={'https://uet.vnu.edu.vn/wp-content/uploads/2022/07/z3542904599833_bc7ba8b48e7673123657dfa22fab9649-1.jpg'}
            time={'05/12/2021'}
          />
          <AlumniCard
            title={'Nguyễn Quốc An: Thủ khoa tốt nghiệp ngành Khoa học máy tính'}
            description={'  Với kết quả học tập toàn khóa học đạt 3,92/4, Nguyễn Quốc An, sinh viên khóa QH-2018 đã trở thành 1 trong 4 thủ khoa xuất sắc của Trường Đại học Công nghệ,'}
            thumbnail={'https://uet.vnu.edu.vn/wp-content/uploads/2022/06/NQA_1-1.jpg'}
            time={'05/12/2021'}
          />
          <AlumniCard
            title={'Chàng trai “phố núi” ước mơ tạo ra những sáng chế có ích cho'}
            description={'Trần Thế Phong – sinh viên khóa QH-2019 ngành Công nghệ thông tin (Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội) với mục tiêu phấn đấu rõ ràng'}
            thumbnail={'https://uet.vnu.edu.vn/wp-content/uploads/2022/06/ava-ttphong.jpg'}
            time={'05/12/2021'}
          />
          <AlumniCard
            title={'[Infographic] Định hướng chuyên ngành phù hợp tạo nên'}
            description={' Sau 4 năm học Hệ thống thông tin, Lê Thị Hạnh (Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội) với kết quả học tập  Xuất sắc 3,78/4 cùng nhiều thành tích “đáng nể”'}
            thumbnail={'https://uet.vnu.edu.vn/wp-content/uploads/2022/06/z3514296692979_d34516baede03e723114b4ed2d22e9a7.jpg'}
            time={'05/12/2021'}
          />
        </Carousel>
      </div>
    </div>
  );
}
