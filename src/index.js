import './style.css';
import Render from './module/render.js';
import { GetApi } from './module/api.js';
import Add from './module/add.js';
import Validation from './module/validation'

window.onload = async () => {
  const result = await GetApi();
  Render(result);
};

const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');

document.getElementById('submit').addEventListener('click', (e) => {
  Add()
  document.getElementById('form').reset();
  e.preventDefault();
});

document.getElementById('refresh').addEventListener('click', (e) => {
  window.location.reload(true);
  e.preventDefault();
});

console.log(document.querySelectorAll('.close'))

document.querySelectorAll('.close').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.style.display = 'none';
  })
})