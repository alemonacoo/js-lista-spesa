console.log("JS OK!");

const shoppingArray = ['pane', 'latte', 'biscotti', 'zucchero', 'caffè', 'coca-cola'];
const shoppingList = document.getElementById("shopping-list");
let itemsCounter = 0;


while(itemsCounter < shoppingArray.length){
    console.log(itemsCounter);
    console.log(shoppingArray[itemsCounter]);
    shoppingList.innerHTML += `<li>${shoppingArray[itemsCounter]}</li>`;
    itemsCounter++;
}