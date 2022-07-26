import axios from 'axios';
import config from 'config';

export const getPosts = async (
  type,
  page = 1,
  limit = 5,
  textSearch = undefined
) => {
  return [
    {
      url: '',
      time: '12/1/12',
      title: 'nguyen huu vu yeu tat ca cac ems',
      description: ' jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw',
      image: 'https://i0.connections.vn/cdn.inevn.com/img/thumb/212461.500x.isij?resize=403,226&quality=100&strip=all',
    },
    {
      url: '',
      time: '12/1/12',
      title: 'nguyen huu vu yeu tat ca cac ems',
      description: ' jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw',
      image: 'https://i0.connections.vn/cdn.inevn.com/img/thumb/212461.500x.isij?resize=403,226&quality=100&strip=all',
    },
    {
      url: '',
      time: '12/1/12',
      title: 'nguyen huu vu yeu tat ca cac ems',
      description: ' jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw',
      image: 'https://i0.connections.vn/cdn.inevn.com/img/thumb/212461.500x.isij?resize=403,226&quality=100&strip=all',
    },
    {
      url: '',
      time: '12/1/12',
      title: 'nguyen huu vu yeu tat ca cac ems',
      description: ' jksa jlas fk asldfjie ae asfsdajkfaeo jasd fasjf eajr faslejfsd flasj lasj sjf eos dfjslf jlajseoifeaw',
      image: 'https://i0.connections.vn/cdn.inevn.com/img/thumb/212461.500x.isij?resize=403,226&quality=100&strip=all',
    }
  ]
};

export const getPostDetail = async (categoryId, postId) => {
  const data = await axios.get( config.apiEndpoint +`/api/articles/${postId}`)
  return data.data;
}