var arrayDescriptionItems, arrayImageItems, arrayPriceItems, arrayQuantityItems, arrayTotalPrice;

// Display next-prev. function
function display() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_displayItem = document.getElementById('displayItem');
    element_displayItem.replaceChildren();
    let new_img = document.createElement('img');
    new_img.setAttribute("src", arrayImageItems[0]);

    element_displayItem.appendChild(new_img);
    let element_displayDescritionItem = document.getElementById('displayDescritionItem');
    element_displayDescritionItem.replaceChildren();
    element_displayDescritionItem.innerText = arrayDescriptionItems[0];
    let element_displayPriceItem = document.getElementById('displayPriceItem');
    element_displayPriceItem.replaceChildren();
    element_displayPriceItem.innerText = arrayPriceItems[0];
}


arrayDescriptionItems = [' Black Experience T-Shirt  ', ' White Experience T-Shirt  ', ' Dirtchamber Hoodie  ', ' Ant Logo Mug  ', ' Water Bottle  ', ' The Fat Of The Land Vinyl  ', ' Experience Double Vinyl  ', ' The Day Is My Enemy CD Album  '];
arrayImageItems = ['img/tshirt1.jpeg', 'img/tshirt2.jpeg', 'img/hoodie.jpeg', 'img/mug.jpeg', 'img/bottle.jpeg', 'img/vinyl1.jpeg', 'img/vinyl2.jpeg', 'img/cd.jpeg'];
arrayPriceItems = [20, 20, 40, 8, 18, 9, 21, 8];
arrayQuantityItems = [];
arrayTotalPrice = [];
display();


document.getElementById('buttonNext').addEventListener('click', (event) => {
    arrayImageItems.push(arrayImageItems.shift());
    arrayPriceItems.push(arrayPriceItems.shift());
    arrayDescriptionItems.push(arrayDescriptionItems.shift());
    display();

});

document.getElementById('buttonPrevious').addEventListener('click', (event) => {
    arrayImageItems.unshift(arrayImageItems.pop());
    arrayPriceItems.unshift(arrayPriceItems.pop());
    arrayDescriptionItems.unshift(arrayDescriptionItems.pop());
    display();

});

document.getElementById('buttonAddToCart').addEventListener('click', (event) => {
    let element_displayQuantityItems = document.getElementById('displayQuantityItems');
    arrayQuantityItems.unshift(1);
    element_displayQuantityItems.innerText = arrayQuantityItems.reduce((a, b) => a + b, 0);
    let element_displayTotalPrice = document.getElementById('displayTotalPrice');
    arrayTotalPrice.unshift(arrayPriceItems[0]);
    element_displayTotalPrice.innerText = arrayTotalPrice.reduce((a, b) => a + b, 0);
    let element_listItems = document.getElementById('listItems');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = arrayQuantityItems[0];

    new_li.appendChild(new_span);
    let new_span2 = document.createElement('span');
    new_span2.innerText = arrayDescriptionItems[0];

    new_li.appendChild(new_span2);
    let new_span3 = document.createElement('span');
    new_span3.innerText = arrayPriceItems[0];

    new_li.appendChild(new_span3);

    element_listItems.appendChild(new_li);

});

document.getElementById('buttonClearCart').addEventListener('click', (event) => {
    let element_displayQuantityItems2 = document.getElementById('displayQuantityItems');
    element_displayQuantityItems2.replaceChildren();
    let element_displayTotalPrice2 = document.getElementById('displayTotalPrice');
    element_displayTotalPrice2.replaceChildren();
    let element_listItems2 = document.getElementById('listItems');
    element_listItems2.replaceChildren();
    while (!!arrayTotalPrice.length) {
        if (--window.LoopTrap <= 0) throw "Infinite loop.";
        arrayTotalPrice.shift();
    }
    while (!!arrayQuantityItems.length) {
        if (--window.LoopTrap <= 0) throw "Infinite loop.";
        arrayQuantityItems.shift();
    }

});