const inputNewItem = document.getElementById("newItem");
let list = localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
let id;

list.forEach((e, i) => {
    displayItems(e, i);
    id = list.length - 1;
});

document.getElementById("add").onclick = e => {
    e.preventDefault();
    if (inputNewItem.value !== "")
        addItem(e)
};

function displayItems(e, i) {
    document.getElementById("list").innerHTML +=
        "<li id='li" + i + "'>" +
        "<img src='bin.svg' onclick='deleteItem(" + i + ")' alt='Trash can'> " +
        "<img src='down.svg' onclick='downItem(" + i + ")' alt='Down mark'> " +
        "<img src='up.svg' onclick='upItem(" + i + ")' alt='Up mark'> " +
        "<input id='in" + i + "' onchange='setItem(" + i + ")' type='text' value='" + e + "'" +
        "</li>";
}

function addItem () {
    list.push(inputNewItem.value);
    localStorage.setItem('list', JSON.stringify(list));
    displayItems(inputNewItem.value, id++);
    inputNewItem.value = "";
}

function deleteItem(i) {
    list.splice(i, 1);
    localStorage.setItem('list', JSON.stringify(list));
    let e = document.getElementById("li" + i);
    e.parentNode.removeChild(e);
}

function setItem(i) {
    list[i] = document.getElementById("in" + i).value;
    localStorage.setItem('list', JSON.stringify(list));
}

function downItem(i) {
    if (i === list.length - 1)
        return;
    let temp = list[i + 1];
    list[i + 1] = list[i];
    list[i] = temp;
    localStorage.setItem('list', JSON.stringify(list));
    location.reload();
}

function upItem(i) {
    if (i === 0)
        return;
    let temp = list[i - 1];
    list[i - 1] = list[i];
    list[i] = temp;
    localStorage.setItem('list', JSON.stringify(list));
    location.reload();
}