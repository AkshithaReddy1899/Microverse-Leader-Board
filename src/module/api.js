const GetApi = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AR9918LMWfmphs/scores');

  const result = await response.json();

  const array = result.result;
  return array;
};

const AddScoreApi = async (obj) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AR9918LMWfmphs/scores', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const result = await response.json();

  return result;
};

export { GetApi, AddScoreApi };