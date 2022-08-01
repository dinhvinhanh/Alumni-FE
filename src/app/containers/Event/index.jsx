import * as React from 'react';
import CategoryLabel from 'app/components/CategoryLabel';
import { Fade } from 'react-slideshow-image';
import { EventCard } from 'app/components/EventCard';
import { useGetPosts } from 'queries/alumni';
import { useEffect, useState } from 'react';
import { getPosts } from 'service/posts';
export function Event({ className = '' }) {
  const [data, setData] = useState();
  useEffect(() => {
    getPosts('su-kien', 1, 25)
      .then(response => setData(response))
  }, [])

  return (
    <div className={className}>
      <CategoryLabel url={'/categories/su-kien'} text={'Sự kiện'}/>
      <div>
        <Fade>
          {data && data.content.map((value, index) =>
            <EventCard data={value} key={index}/>)
          }
        </Fade>

      </div>
    </div>
  );
};