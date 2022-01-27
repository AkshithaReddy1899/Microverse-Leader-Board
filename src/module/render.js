const Render = (list) => {
  list.sort((a, b) => b.score - a.score);
  list.forEach((element) => {
    const listItem = document.createElement('li');
    const divCont = document.createElement('div');
    const imgCont = document.createElement('div');
    divCont.className = 'div-container';
    imgCont.className = 'img-container';
    const img = document.createElement('img');
    const span = document.createElement('span');
    span.className = 'user';
    const spanScore = document.createElement('span');
    span.textContent = `${element.user}`;
    spanScore.textContent = `${element.score}`;
    listItem.className = 'list-item';

    divCont.appendChild(span);
    divCont.appendChild(spanScore);
    imgCont.appendChild(img);
    listItem.appendChild(imgCont);
    listItem.appendChild(divCont);
    document.getElementById('list').appendChild(listItem);
  });
};

export default Render;