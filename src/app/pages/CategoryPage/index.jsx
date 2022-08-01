import * as React from 'react';
import { useEffect, useState } from 'react';
import { PostItem } from '../../components/PostItem';
import { Pagination } from '@mui/material';
import { useGetPosts } from '../../../queries/alumni';
import CategoryLabel from '../../components/CategoryLabel';
import { Helmet } from 'react-helmet-async';
import { useHistory, useLocation } from 'react-router-dom';
import useQuery from 'app/hooks/useQuery';
import { getPosts, searchPost } from '../../../service/posts';

export function CategoryPage() {
  const [data, setData] = useState();
  const [type, setType] = useState('');
  const location = useLocation();
  const history = useHistory();
  const query = useQuery();
  useEffect(() => {
    if (location.pathname === '/search') {
      searchPost(query.get('q'), 1, 25)
        .then(response => setData(response))
    } else {
      getPosts(location.pathname.slice(1, location.pathname.length), 1, 25)
        .then(response => setData(response))
    }
  }, [])

  useEffect(() => {
    switch (location.pathname) {
      case '/search':
        setType('Kết quả tìm kiếm cho từ: ' + query.get('q'));
        break;
      case '/tin-tuc':
        setType('Tin tức');
        break;
      case '/su-kien':
        setType('Sự kiện');
      case '/guong-mat-cuu-sinh-vien':
        setType('Gương mặt cựu sinh viên');
        break;
    }

  }, [location.pathname])
  return (
    <div className={'mx-auto w-full w-container mt-6 px-3 md:px-0'}>
      <Helmet>
        <title>{type}</title>
      </Helmet>
      <CategoryLabel url={'#1'} text={type}/>
      {data && data.content.map(((value, index) =>
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