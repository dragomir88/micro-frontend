import axios from 'axios';
import { useQuery } from 'react-query';
export const useUsers = () => {
    return useQuery('users', async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      return data;
    });
  };