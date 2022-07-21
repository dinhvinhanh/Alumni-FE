import * as React from 'react';
import { PostItem } from '../../components/PostItem';
import { Pagination } from '@mui/material';
import { useGetPosts } from '../../../queries/alumni';
import CategoryLabel from '../../components/CategoryLabel';

export function CategoryPage() {
  const { data } = useGetPosts('', 1, 5);
  console.log(data);
  return (
    <div className="mx-auto w-full w-container mt-6 px-3 md:px-0">
      <CategoryLabel url={''} text={'Sự kiện'}/>
      {data && data.map(((value, index) =>
        <PostItem
          key={index} title={value.title}
          data={value}
      />))}
      <div className={'flex justify-end my-2'}>
          <Pagination count={10} variant="outlined" color="primary" />
      </div>
    </div>
  );
};