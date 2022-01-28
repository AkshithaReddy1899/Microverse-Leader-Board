const Render = (list) => {
  const data = [];
  list.forEach((object) => {
    if (object.score.length < 4) {
      data.push(object);
    }
  });

  data.sort((a, b) => b.score - a.score);

  data.forEach((element) => {
    document.getElementById('list').innerHTML += `<li>
    <div class="div-container">
    <span class="user">${element.user}</span>&nbsp;
    <span class="score">${element.score}</span>
    </div>
    </li>`;
  });
};

export default Render;
