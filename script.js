//getting hold of the html elements to manipulate
const addItemInput = document.querySelector('.addItemInput');//input field
const listItems = document.getElementsByTagName('li');//getting hold of the list tags 

/*
-----INGORE FOR NOW --------
//these list tags will change when the user hovers over them 
for(let i = 0; i < listItems.length; i += 1){
    listItems[i].addEventListener('mouseover', ()=>{
        listItems[i].textContent = listItems[i].textContent.toUpperCase();
        listItems[i].style.color = '#f305058c';
        listItems[i].style.fontWeight = 'bold';
        listItems[i].style.textDecoration = 'underline';
    });
//once mouse stops hovering on the list it will return to its normal format
    listItems[i].addEventListener('mouseout', ()=>{
        listItems[i].textContent = listItems[i].textContent.toLocaleLowerCase();
        listItems[i].style.color = 'black';
        listItems[i].style.fontWeight = 'none';
        listItems[i].style.textDecoration = 'none';
    })
}
*/

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

