import './style.css';
import Render from './module/render.js';
import { GetApi } from './module/api.js';
import Add from './module/add.js';

const refreshFunction = async () => {
  const result = await GetApi();
  Render(result);
};

window.onload = () => {
  refreshFunction();
};

document.getElementById('submit').addEventListener('click', (e) => {
  Add();
  document.getElementById('form').reset();
  e.preventDefault();
});

document.getElementById('refresh').addEventListener('click', (e) => {
  refreshFunction();
  e.preventDefault();
});

document.querySelectorAll('.close').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.style.display = 'none';
  });
});