import * as React from 'react';
import Carousel from 'react-multi-carousel';
import CategoryLabel from 'app/components/CategoryLabel';
import 'react-multi-carousel/lib/styles.css';
import AlumniCard from '../../components/AlumniCard';
import { useGetPosts } from '../../../queries/alumni';
import { useEffect, useState } from 'react';
import { getPosts } from '../../../service/posts';

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
  const [data, setData] = useState();
  useEffect(() => {
    getPosts('guong-mat-cuu-sinh-vien', 1, 25)
      .then(response => setData(response))
  }, [])

  return (
    <div>
      <CategoryLabel url={''} text={'Gương mặt cựu sinh viên'}/>
      {data && (
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
            {data.content.map((value, index) =>
              <AlumniCard
                data={value}
                key={index}
              />)
            }
          </Carousel>
        </div>
      )}
    </div>
  );
}
