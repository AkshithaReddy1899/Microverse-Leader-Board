import { AddScoreApi } from './api.js';
 
const Add = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');

  if (inputName.value === '' || inputScore.value === '') {
   
  } else {
    
    const newScore = {
      user: inputName.value,
      score: inputScore.value,
    };

    AddScoreApi(newScore);
  }
};

export default Add;