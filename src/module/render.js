const Render = (list) => {
  list.sort((a, b) => b.score - a.score);
  console.log(list);
  list.forEach((element) => {
   document.getElementById('list').innerHTML += `<li>
    <div class="div-container">
    <span class="user">${element.user}</span>&nbsp;
    <span class="score">${element.score}</span>
    </div>
    </li>`;
  })
};

export default Render;
