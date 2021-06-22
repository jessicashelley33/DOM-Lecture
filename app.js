//console.log("Hello Node runtime terminal");

/* Document Object Model (DOM)
    DOM is the data representation of the objects that comprise the structure and content of a document on the web. It contains, but is not limited to:
  
    - Document
        HTML
        - Head
        - Meta Tags
        -Link Tags
        - Title Tags
    - Body
        - Nav
        - Header
        - Div's
        - H1 tags
    - and any of their attributes

*/

// Creating our very first element.
/*let h1tag = document.createElement('h1');
h1tag.style.color = "blue";
h1tag.innerText = "Welcome to the Document Object Model";
document.body.appendChild(h1tag);*/

//  OFF TOPIC: accessing device configuration with DOM
//let info = navigator.oscpu;
//console.log(info);
// Accessing element using getElementById
let listTitle = document.getElementById('listTitle');
listTitle.innerText = "To Do & Grocery List";


// Accessing elements using querySelector
/* 
    Most versatile of all selectors.
    - access first element if there's more than one
    - returns null if no element is found
    - access by element name, . class, or #id

*/
let listItem = document.querySelector('ul li');
console.log(listItem);
listItem.style.textAlign = 'center';
listItem.style.color = "pink";

// Access Multiple Elements

/*
    When we access multiple elements, a node list is returned.
        HTMLCollection
    -Not an array, but works like one.
    - Can access different nodes using [index]
    - Access any element by array notation or item method.
    - Access multiple elements using:
    - getElementByClassName()
    - getElementByTagName()
    -querySelectorAll()
*/

/*let groceries = document.getElementsByClassName("groceryItem");
// Works like an array but isn't one. It's actually an object.
console.log(groceries[0]);
// Accessing first instance of groceryItem class
groceries[0].innerText = 'Biology books';
console.log(grocery.item(2));*/

// Accessing ALL li tags in our index.html file
let liTag = document.getElementsByTagName('li');
console.log(liTag);

let selectAll = document.querySelectorAll('ul li');
console.log(selectAll);

/*
    This newly created element will shop up under HTML Collection, but it will not show up with nodeList.
    The reason why is because HTMLCollection is dynamic whereas NodeList is static.
*/

/*let newListItem = document.createElement('li')
let groceryList = document.getElementById("groceryList")
groceryList.appendChild(newListItem);
newListItem.innerText = "test of dynamic vs static (hint: look inside console.log)"*/

/*
    Difference between HTMLCollection & nodeList
    -both are collections of DOM nodes
    -Node is used as a generic term for everything
    -HTMLCollection object is an array-like list of HTML elements

*/

// DOM Tree & Access Nodes
// Displays ALL nodes of the body element
console.log(document.body.childNodes);
//Whitespace inside elements == text
// text == nodes
// All can be accessed by index numbers starting at [0]
console.log(document.body.children)

/* 
    Properties:
    - first(Element)Child - first element or node
    - last(Element)Child - last element of node
    - parent(Element)Node - access parent node of element
    -next(Element)Sibling - element next to the one accessed
    -previous(Element)Sibling - previous to the one accessed
*/

let listDiv = document.getElementById('list')
console.log(listDiv.firstChild);
console.log(listDiv.firstChild.nextSibling.nextSibling);

// Adding Text using DOM
// .innerText property
// .innerHTML specifics HTML content of an element
// Use a loop to get each element (liTag) in HTMLCollection and change their properties as shown.
for(tag of liTag) {
    //console.log(tag);
    tag.style.fontFamilly = "cursive";
    tag.style.color = "blue";
}
// Reassign 5th [index 4] list item of all listItem classes
document.getElementsByClassName("listItem")[4].innerText = "Yell at Harry";

// Event Listener

/*
    Event Listener allows us to execute a function when a particular event occurs. We call it using .addEventListener()
     - .addEventListener takes an event and a callback function to work.

     - Event => what happens
     - Callback function => a function that excutes when the event occurs.

*/

/*let button = document.getElementById("clickMe");
button.addEventListener("click",(e) => {
    //Shows the button
        console.log(e.target);
        console.log("Button has been clicked");
        e.target.style.backgroundColor = "red";
})*/


button.addEventListener("click", (e) =>{
    let textInput = document.getElementById('listInput').value;
    let newGroceryItem = document.createElement('li'); // child node
    let groceryList = document.getElementById('groceryList'); // parent node
    newGroceryItem.innerText = textInput
    groceryList.appendChild(newGroceryItem);
})


