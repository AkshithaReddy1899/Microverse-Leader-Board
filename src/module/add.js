import { Error, Notification } from './notification.js';
import { AddScoreApi } from './api.js';

const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');

const Add = () => {
  const newScore = {
    user: inputName.value,
    score: inputScore.value,
  };

  if (inputName.value === '' || inputScore.value === '') {
    Error();
  } else {
    AddScoreApi(newScore);
    Notification();
  }
};

export default Add;