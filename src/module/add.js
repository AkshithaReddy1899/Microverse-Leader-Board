const Add = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');

  console.log(inputName.value)
  console.log(inputScore.value)
  console.log('OM')

  const newScore = {
    user: inputName.value,
    score: inputScore.value,
  };

  console.log(newScore);

  /*if (inputName.value !== '' || inputScore.value !== '') {
    console.log('NOT');
    const newScore = {
      user: inputName.value,
      score: inputScore.value,
    };
    console.log(newScore)
    AddScoreApi(newScore);
    Notification();

  } else {
    console.log('Empty');
    Error();
  }*/
};

/*
const Event = () => {
  Validate();
};

const Refresh = () => {
  window.location.reload(true);
};
*/

export default Add;