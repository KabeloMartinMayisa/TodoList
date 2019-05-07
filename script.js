//getting hold of the html elements to manipulate
const addItemInput = document.querySelector('.addItemInput');//input field
const listItems = document.getElementsByTagName('li');//getting hold of the list tags 
const listDiv = document.querySelector('.list');//the div that is the parent of all the tags that'll be used eg. button, ul, li ...
const hideAndShowBTN = document.querySelector('button.hideAndShowList');//the button that will hide or show the entire list when triggered



//these list tags will change when the user hovers over them 
//using event bubbling where the event listener is on the div sorrounding the list yet the specific target targets the LI elements 
    listDiv.addEventListener('mouseover', (event)=>{
        if(event.target.tagName === 'LI'){
            event.target.textContent = event.target.textContent.toUpperCase();
        }
    });

//once mouse stops hovering on the list it will return to its normal format
//using event bubbling where the event listener is on the div sorrounding the list yet the specific target targets the LI elements 
    listDiv.addEventListener('mouseout', (event)=>{
        if(event.target.tagName === 'LI'){
            event.target.textContent = event.target.textContent.toLocaleLowerCase();
        }
    });



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

//hides and shows the list along with the add and remove buttons depending on its style.display 
hideAndShowBTN.addEventListener('click', () =>{
    if(listDiv.style.display == 'none'){
        hideAndShowBTN.textContent = 'Hide List';
        listDiv.style.display = 'block';
    }
    else {
        hideAndShowBTN.textContent = 'Show List';
        listDiv.style.display = 'none';
    }
});