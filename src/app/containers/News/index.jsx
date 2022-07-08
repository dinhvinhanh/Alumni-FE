import * as React from 'react';
import CategoryLabel from 'app/components/CategoryLabel';
import { PostItem } from 'app/components/PostItem';
import useStyles from './styles';
export function News(props) {
  const classes = useStyles();
  const data = [
    {
      url: 'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
      time: '27/05/2020',
      title: 'Chiến lược phát triển Trường Đại học Hà Nội giai đoạn 2021 - 2030, tầm nhìn 2045',
      description: 'Lịch sử 63 năm trưởng thành và phát triển của Trường Đại học Hà Nội đã ghi dấu với nhiều cống hiến quan trọng cho quốc gia trong đào tạo, nghiên cứu khoa học và phụng sự cộng đồng. Tiếp nối những kết quả tự hào đó, năm 2022',
    },
    {
      url: 'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
      time: '27/05/2020',
      title: 'Chiến lược phát triển Trường Đại học Hà Nội giai đoạn 2021 - 2030, tầm nhìn 2045',
      description: 'Lịch sử 63 năm trưởng thành và phát triển của Trường Đại học Hà Nội đã ghi dấu với nhiều cống hiến quan trọng cho quốc gia trong đào tạo, nghiên cứu khoa học và phụng sự cộng đồng. Tiếp nối những kết quả tự hào đó, năm 2022',
    },
    {
      url: 'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
      time: '27/05/2020',
      title: 'Chiến lược phát triển Trường Đại học Hà Nội giai đoạn 2021 - 2030, tầm nhìn 2045',
      description: 'Lịch sử 63 năm trưởng thành và phát triển của Tr ử 63 năm trưởng thành và phát triển của Trử 63 năm trưởng thành và phát triển của Trử 63 năm trưởng thành và phát triển của Tr ường Đại học Hà Nội đã ghi dấu với nhiều cống hiến quan trọng cho quốc gia trong đào tạo, nghiên cứu khoa học và phụng sự cộng đồng. Tiếp nối những kết quả tự hào đó, năm 2022',
    }
  ]

  return (
    <div>
      <CategoryLabel url={''} text={'Tin tức'}/>
      <div>
        {
          data.map((value, index) => <PostItem data={value} key={index} />)
        }
      </div>
      <a href='/news' className={`${classes.viewMore} text-black hover:underline hover:text-red-900 italic text-slate-400`}>Xem thêm</a>
    </div>
  );
};