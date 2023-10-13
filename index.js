const title = document.getElementById('title');
const submit = document.getElementById('submit');
const save = document.getElementById('save');
const retrieve = document.getElementById('retrieve');
const itemList = document.getElementById('itemList');

var todo = [];
function todoTitle(title, done) {
  this.title = title;
  this.done = done;
}

submit.addEventListener('click', (x)=>{
  x.preventDefault();
  

  todo.push(new todoTitle(title.value, false));
  let list = itemList.innerHTML;
  for (i in todo){
    itemList.innerHTML =  list + `
    <li id='num${i}'>
      <p id='text${i}'>${todo[i].title}</p>
      <div>
        <button class="btnDone" onClick='done(${i})'>&#x2714;</button>
        <button class="btnClear" onClick='clr(${i})'>&#x2716;</button>
      </div>
    </li>
    `
    if (todo[i].done){
      document.getElementById('text'+i).style.textDecoration = 'line-through';
    }
  }

  console.log(todo)
})

const done = (item) => {
  todo[item].done = true;
  if (todo[item].done){
    document.getElementById('text'+item).style.textDecoration = 'line-through';
  }
}

const clr = (item) => {
  todo.shift(todo[item]);

  itemList.innerHTML = '';
  for (i in todo){
    itemList.innerHTML =  itemList.innerHTML + `
    <li id='num${i}'>
      <p id='text${i}'>${todo[i].title}</p>
      <div>
        <button class="btnDone" onClick='done(${i})'>&#x2714;</button>
        <button class="btnClear" onClick='clr(${i})'>&#x2716;</button>
      </div>
    </li>
    `
    if (todo[i].done){
      document.getElementById('text'+i).style.textDecoration = 'line-through';
    }
  }
}

save.addEventListener('click', ()=>{
  const userInput = prompt('Enter todo file name.');
  localStorage.setItem(userInput, JSON.stringify(todo));
  todo = [];
  itemList.innerHTML = '';
})

retrieve.addEventListener('click', ()=>{
  const userInput = prompt('Enter todo file name.');
  todo = localStorage.getItem(userInput);
  todo = JSON.parse(todo);

  for (i in todo){
    itemList.innerHTML =  itemList.innerHTML + `
    <li id='num${i}'>
      <p id='text${i}'>${todo[i].title}</p>
      <div>
        <button class="btnDone" onClick='done(${i})'>&#x2714;</button>
        <button class="btnClear" onClick='clr(${i})'>&#x2716;</button>
      </div>
    </li>
    `
    if (todo[i].done){
      document.getElementById('text'+i).style.textDecoration = 'line-through';
    }
  }
})
