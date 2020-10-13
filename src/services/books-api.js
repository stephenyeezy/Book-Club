const BASE_URL = '/api/books';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(tome) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(tome)
  }).then(res => res.json());
}

export function update(tome) {
  return fetch(`${BASE_URL}/${tome._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(tome)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`,{
    method: 'DELETE'
  }).then(res => res.json());
}