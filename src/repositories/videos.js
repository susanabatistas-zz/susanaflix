import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  })
    .then(async (res) => {
      if (res.ok) {
        const result = await res.json();
        return result;
      }

      throw new Error('Não possível cadastrar os dados :(');
    });
}

export default {
  create,
};
