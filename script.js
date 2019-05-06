//getting hold of the html elements to manipulate
const addItemInput = document.querySelector('.addItemInput');//input field


//items typed into the input field will be added to a list **unordered list in index.html ***
const addItem = () =>{
    let ol = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ol.appendChild(li);
    addItemInput.value = '';
}
//everytime it is clicked it will remove the last item on the list
const removeItem = () =>{
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
}

