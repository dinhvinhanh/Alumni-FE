import * as React from 'react';
import { PostItem } from '../../components/PostItem';
import { Pagination } from '@mui/material';
import { useGetPosts } from '../../../queries/alumni';
import CategoryLabel from '../../components/CategoryLabel';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useQuery from 'app/hooks/useQuery';

export function CategoryPage() {
  const { data } = useGetPosts('', 1, 5);
  const [type, setType] = useState('');
  const history = useHistory();
  const location = useLocation();
  let query = useQuery();

  useEffect(() => {
    const label = location.pathname === '/category' ? 'Tin tức - Sự kiện' : 'Kết quả tìm kiếm';
    setType(label);
  }, [location.pathname])
  return (
    <div className="mx-auto w-full w-container mt-6 px-3 md:px-0">
      <Helmet>
        <title>{type}</title>
      </Helmet>
      <CategoryLabel url={''} text={type}/>
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