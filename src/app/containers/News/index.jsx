import * as React from 'react';
import CategoryLabel from 'app/components/CategoryLabel';
import { PostItem } from 'app/components/PostItem';
import useStyles from './styles';
import { useGetPosts } from '../../../queries/alumni';
export function News(props) {
  const classes = useStyles();
  const { data } = useGetPosts('news', 1, 5);

  return (
    <div>
      <CategoryLabel url={''} text={'Tin tức'}/>
      <div>
        {
          data && data.map((value, index) => <PostItem data={value} key={index} />)
        }
      </div>
      <a href='/news' className={`${classes.viewMore} text-black hover:underline hover:text-red-900 italic text-slate-400`}>Xem thêm</a>
    </div>
  );
};