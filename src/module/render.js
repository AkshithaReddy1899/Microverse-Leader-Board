const Render = (list) => {
  list.sort((a, b) => b.score - a.score);
  console.log(list);
  list.forEach((element) => {
   document.getElementById('list').innerHTML += `<li>
    <div class="div-container">
    <span class="user">${element.user}</span>&nbsp;
    <span class="score">${element.score}</span>
    </div>
    </li>`
    const divCont = document.createElement('div');
    divCont.className = 'div-container';
    const spanId = document.createElement('span');
    spanId.textContent = `${id+1}`;
    const span = document.createElement('span');
    span.className = 'user';
    const spanScore = document.createElement('span');
    span.textContent = `${element.user}`;
    spanScore.textContent = `${element.score}`;
    listItem.className = 'list-item';

    divCont.appendChild(spanId);
    divCont.appendChild(span);
    divCont.appendChild(spanScore);
    listItem.appendChild(divCont);
    document.getElementById('list').appendChild(listItem);*/
  });
};

export default Render;
