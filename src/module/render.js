const Render = (list) => {
  list.forEach(element => {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';
    listItem.textContent = `${element.name} : ${element.score}`
    document.getElementById('list').appendChild(listItem)
  });
}

export default Render;