import './style.css';
import List from './module/list.js';
import Form from './module/form.js';

const container = document.getElementById('container');

window.onload = () => {
  container.innerHTML = List() + Form();
};
