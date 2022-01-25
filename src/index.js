import './style.css';
import Api from './module/api.js';
import Render from './module/render.js';
import Add from './module/add.js';
import Event from './module/eventListener';
import List from './module/list.js';

window.onload = () => {
  Render(List);
  Event();
};

