import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/comments?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/comments/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/comments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/comments', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}