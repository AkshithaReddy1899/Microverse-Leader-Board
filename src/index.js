import './style.css';
import Render from './module/render';
import { Notification } from './module/notification.js';
import { GetApi } from './module/api';
import Add from './module/add'

window.onload = async () => {
  const result = await GetApi();
  Render(result);
};

document.getElementById('submit').addEventListener('click', (e) =>{
  document.getElementById('form').reset();
  e.preventDefault();
  Add();
})

document.getElementById('refresh').addEventListener('click', () =>{
  window.location.reload(true);
})