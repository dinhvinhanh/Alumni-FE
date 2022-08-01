import * as React from 'react';
import CategoryLabel from 'app/components/CategoryLabel';
import { PostItem } from 'app/components/PostItem';
import useStyles from './styles';
import { useGetPosts } from 'queries/alumni';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../../service/posts';

export function News({ className = '' }) {
  const classes = useStyles();
  const [data, setData] = useState();
  useEffect(() => {
    getPosts('tin-tuc', 1, 25)
      .then(response => setData(response))
  }, [])

  return (
    <div className={className}>
      <CategoryLabel url={'/categories/tin-tuc'} text={'Tin tức'}/>
      <div>
        {
          data && data.content.map((value, index) =>
            <PostItem
              data={value}
              key={index}
            />)
        }
      </div>
      <Link to='/tin-tuc' className={`${classes.viewMore} text-black hover:underline hover:text-red-900 italic text-slate-400`}>Xem thêm</Link>
    </div>
  );
};