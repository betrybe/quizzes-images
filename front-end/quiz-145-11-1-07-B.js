const task = (value) => {
  const list = document.querySelector('.taskList');
  const item = document.createElement('li');
  item.innerText = value;
  list.appendChild(item);
}
