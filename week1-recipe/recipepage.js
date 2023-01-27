//const ingred = ["peanut butter", ""]
/*
//const foodList = document.getElementByClass("ingredients");
const foodList = ["peanut", "banana", "jam"];
*/
/*
for (i=0; i < foodList.length; i++) {
   foodLista = document.createElement('input');
   foodLista.setAttribute("type", "checkbox");
   document.body.appendChild("foodLista");
}
*/
/*
function check(array){
const myDiv = document.getElementById("myDiv");
let checkbox = document.createElement("input");
itemList.setAttribute("type", "checkbox");
myDiv.appendChild(checkbox);

for (i=0; i < array.length; i++){
let item = array[i];
console.log(item);
let itemList = document.createElement('li');
itemList.innerHTML = `<input type="checkbox"> ${item}`;
checkbox.appendChild(itemList);
}
}

check(foodList);

*/

const foodList = ["2 whole wheat bread slices", "1 banana", "strawberry jam", "peanut butter"];
const myDiv = document.getElementById("myDivTwo");
let checkbox = document.createElement("input");
/*
//myDiv.appendChild(itemList)
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";
var label = document.createElement("label");

label.htmlFor = "id";

label.appendChild(document.createTextNode("This creates the label for checkbox"));

myDiv.appendChild(checkbox);
myDiv.appendChild(label);
//}
*/
function check(array){
    for (i=0; i < array.length; i++){
let checkbox = document.createElement("input");
//myDiv.appendChild(itemList)
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";
//checkbox.className = "checked";


var label = document.createElement("label");

label.htmlFor = "id";

label.appendChild(document.createTextNode(`${array[i]}`));

myDiv.appendChild(checkbox);
myDiv.appendChild(label);
    }
}
/*
    let checkList = document.createElement("input");
for (i=0; i < array.length; i++){
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
      
    let item = array[i];
    //console.log(item);
    item
    //let itemList = document.createElement('li');
    itemList.innerHTML = `${item}`
    checkbox.appendChild(itemList);
}
}*/
check(foodList);

const ul =  document.getElementById("ingredients");
ul.remove();
/*
function checkThrough(){
    document.getElementByClass("checked").style.textDecoration = "line-through";
  }
  
  element.addEventListener("onClick", checkThrough);
  */