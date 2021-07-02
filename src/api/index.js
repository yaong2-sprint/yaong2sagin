import fetchData from './fetchData';

const API_ENDPOINT = 'https://api.thecatapi.com/v1';

export default {
  getBreeds: (keyword) =>
    fetchData(`${API_ENDPOINT}/breeds/search?q=${keyword}`, 'getBreeds'),
  getCats: (breedId) =>
    fetchData(
      `${API_ENDPOINT}/images/search?limit=20&breed_ids=${breedId} `,
      'getCats',
    ),
  getRandomCats: () =>
    fetchData(`${API_ENDPOINT}/images/search?limit=50`, 'getRandomCats'),
};
