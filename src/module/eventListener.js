import Add from "./add.js";
import Render from "./render.js";
import List from "./list.js";

const Event = () => {
  document.getElementById('submit').addEventListener('click', (e) =>{
    const obj = Add();
    e.preventDefault();
    List.push(obj);
    document.getElementById('list').textContent = "";
    Render(List);
  })

  document.getElementById('refresh').addEventListener('click', () =>{
  window.location.reload(true);
  })
}

export default Event;