import * as React from 'react';
import CategoryLabel from 'app/components/CategoryLabel';
import { Fade } from 'react-slideshow-image';
import { EventCard } from 'app/components/EventCard';
export function Event(props) {
  return (
    <div>
      <CategoryLabel url={''} text={'Sự kiện'}/>
      <div>
        <Fade>
          <EventCard data={{
            url: 'https://i.stack.imgur.com/QqRWG.jpg',
            time: '20:00, 7/8/3030',
            title: 'Nhung diem moi trong tuyen sinh',
            location: 'Ha Noi'
          }} />
          <EventCard data={{
            url: 'https://www.w3schools.com/w3css/img_lights.jpg',
            time: '20:00, 7/8/3030',
            title: 'du lieu test Nhung diem moi trong tuyen sinh',
            location: 'Than Hoa'
          }} />
          <EventCard data={{
            url: 'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
            time: '20:00, 7/8/3030',
            title: 'ok e sdflj sdf kelr skdf jasej ke ',
            location: 'Ha Noi'
          }} />
        </Fade>

      </div>
    </div>
  );
};