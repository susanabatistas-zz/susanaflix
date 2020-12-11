import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {
      if (res.ok) {
        const result = await res.json();
        return result;
      }

      throw new Error('Não possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const result = await res.json();
        return result;
      }

      throw new Error('Não possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
