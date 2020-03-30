import { client } from './client';
import { COUNT_OF_USERS } from '../config';

export const getUsersList = () => client.get(`?results=${COUNT_OF_USERS}`);
