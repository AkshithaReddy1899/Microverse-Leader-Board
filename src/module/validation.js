import Add from "./add";

const Validation = () => {
  const inputName = document.getElementById('input-name');
  const inputScore = document.getElementById('input-score');
  const error = document.getElementById('error');
  const notification = document.getElementById('notification');

  if(inputName.value === "" || inputScore.value === "") {
    error.style.display = 'block';
  }else {
    error.style.display = 'none';
    notification.style.display = 'block';
    Add();
  }
}

export default Validation;