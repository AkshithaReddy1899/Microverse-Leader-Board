const Render = (list) => {
  list.sort((a, b) => a.score - b.score);
  console.log(list);
  list.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${element.user} : ${element.score}`;
    document.getElementById('list').appendChild(listItem);
  });
};

export default Render;