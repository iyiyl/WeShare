import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  return request(`/api/topics?_page=${page}&_limit=${PAGE_SIZE}`);
}

export function remove(id) {
  return request(`/api/topics/${id}`, {
    method: 'DELETE',
  });
}

export function patch(id, values) {
  return request(`/api/topics/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/topics', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}