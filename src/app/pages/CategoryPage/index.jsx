import * as React from 'react';
import { PostItem } from '../../components/PostItem';
import { Pagination } from '@mui/material';
import { useGetPosts } from '../../../queries/alumni';

export function CategoryPage() {
  const { data } = useGetPosts('', 1, 5);
  console.log(data);
  return (
    <div className="mx-auto w-container mt-6">
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