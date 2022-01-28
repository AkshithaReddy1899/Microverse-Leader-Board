import { AddScoreApi } from './api.js';

const Add = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');
  const error = document.getElementById('error');
  const errorScore = document.getElementById('error-number');
  const notification = document.getElementById('notification');

  const newScore = {
    user: inputName.value,
    score: inputScore.value,
  };

  if (inputName.value === '' || inputScore.value === '') {
    error.style.display = 'flex';
  } else if (inputScore.value.length > 4) {
    errorScore.style.display = 'flex';
  } else {
    error.style.display = 'none';
    errorScore.style.display = 'none';
    notification.style.display = 'flex';
    AddScoreApi(newScore);
  }
};

export default Add;