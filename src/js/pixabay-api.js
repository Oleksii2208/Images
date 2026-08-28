import axios from 'axios';

// використовую async/await

export async function getImagesByQuery(query, page) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '56897880-ce564d0c5f2c9a99203aeddd2',
    q: query,
    page: page,
    per_page: 15,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;
  console.log(url);

  const res = await axios.get(url);
  return res.data.hits;
}

// export function getImagesByQuery(query, page) {
//   const BASE_URL = 'https://pixabay.com';
//   const END_POINT = '/api/';
//   const params = new URLSearchParams({
//     key: '56897880-ce564d0c5f2c9a99203aeddd2',
//     q: query,
//     page: page,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;
//   console.log(url);

//   return axios
//     .get(url)
//     .then(res => res.data.hits)
//     .catch(error => {
//       console.log(error);
//     });
// }
