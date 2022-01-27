import './style.css';
import Render from './module/render.js';
import { GetApi } from './module/api.js';
import Add from './module/add.js';

window.onload = async () => {
  const result = await GetApi();
  Render(result);
};

document.getElementById('submit').addEventListener('click', (e) => {
  Add();
  document.getElementById('form').reset();
  e.preventDefault();
});

document.getElementById('refresh').addEventListener('click', (e) => {
  window.location.reload(true);
  e.preventDefault();
});