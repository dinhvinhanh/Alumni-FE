import { useQuery } from 'react-query';
import { getCategories } from '../service/category';

export const useGetCategories = () => useQuery(
  'useGetCategories',
  () => getCategories(), {
    staleTime: 3600
  }
);