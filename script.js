const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const bttn = document.querySelector('#btn')

bttn.addEventListener('click', function(){
  

  if(inputBox.value === ''){
    alert('write something')
  } else {
    let listItem = document.createElement('li')
    listItem.textContent = inputBox.value
    listContainer.appendChild(listItem)
    // till here is the code for a basic to do list that adds items
    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    listItem.appendChild(span)
  }

  inputBox.value = '';
  saveData();

})

listContainer.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked')
  } else if(e.target.tagName === 'SPAN'){   
    e.target.parentElement.remove();
  }
}, false)

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem('data')
}
showTask();
 




