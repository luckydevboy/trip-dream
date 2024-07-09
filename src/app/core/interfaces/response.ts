import { Pagination } from '@core/interfaces';

export interface Response<T> {
  status: 'success' | 'error' | 'fail';
  pagination: Pagination;
  data: T;
}
