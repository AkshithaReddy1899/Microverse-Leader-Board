import { AddScoreApi } from './api.js';

const Add = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');
  const error = document.getElementById('error');
  const notification = document.getElementById('notification');

  const newScore = {
    user: inputName.value,
    score: inputScore.value,
  };

  if(inputName.value === "" || inputScore.value === "") {
    error.style.display = 'flex';
  }else {
    error.style.display = 'none';
    notification.style.display = 'flex';
    AddScoreApi(newScore);
  }
};

export default Add;