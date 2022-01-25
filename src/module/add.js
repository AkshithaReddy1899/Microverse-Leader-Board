const Add = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');

  const newScore = {
    name : inputName.value,
    score: inputScore.value
  }

  return newScore;
}

export default Add;