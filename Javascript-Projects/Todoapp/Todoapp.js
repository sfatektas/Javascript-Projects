
const form = document.querySelector('form');

const input = document.querySelector('input');

const tasklist = document.querySelector('#task-list')

const deleteallbuton = document.querySelector('#btnDeleteAll')

var items;

function getitemFromLs() {
    if (localStorage.getItem('items') != null) {
        items = JSON.parse(localStorage.getItem('items'));
    }
    else {
        items = [];
    }
}

function setitemFromLs() {
    localStorage.setItem('items', JSON.stringify(items));
}
function deleteitemFromLs(text) {
   
    for (let i = 0; i < items.length; i++) {
        if (items[i] == text)
            items.splice(i, 1);
    }
    setitemFromLs();
}
function listclear() {
    tasklist.innerHTML = '';
}
function loadItems() {

    // deletealltask();
    items.forEach(element => {
        createitem(element);
    });
}
function createitem(text) {
    const task = document.createElement('li');
    task.className = "list-group-item list-group-item-secondary";
    task.appendChild(document.createTextNode(text));

    //create a 

    const a = document.createElement('a');
    a.href = '#';
    a.className = 'delete-item float-right';
    a.innerHTML = '<i class="fas fa-times"></i>';

    task.appendChild(a);

    //add task 
    tasklist.appendChild(task);
}
function addnewtask(e) {
    var exist = false;
    e.preventDefault();

    if (input.value === '') {
        alert("add new item")
    }
    // create li
    else {

        items.forEach(element => {
            if (element == input.value) {
                exist = true;
            }
        });
        if (exist)
        {
            alert("task exist now")
            exist = false;
        }
        else {
            items.push(input.value);
            listclear();//task listesini temizliyoruz.
            loadItems();// ıtemları tekrar güncelliyoruz.
            input.value = '';
        }
    }
}
function deletetask(e) {
    if (e.target.classList.value == 'fas fa-times') {
        //delete from tasklist
        e.target.parentElement.parentElement.remove();
        //delete from localstorage
        deleteitemFromLs(e.target.parentElement.parentElement.textContent);
    }
}
function deletealltask() {

    while (tasklist.firstChild) {
        tasklist.firstChild.remove();
    }
    localStorage.clear();

    items = [];
    // other way
    //tasklist.innerHTML = '';
}
function executelisteners() {

    getitemFromLs();//local storage de veri varsa onları kontrol ediyoruz.

    loadItems();//taskları güncelleyip yazdırıyoruz

    form.addEventListener('submit', function (e) {
        addnewtask(e);
        setitemFromLs();// local storage güncelleniyor.
        getitemFromLs();// local storage den tasklar çekiliyor.
    });

    tasklist.addEventListener('click', function (e) {
        deletetask(e);
    });
    deleteallbuton.addEventListener('click', function (e) {
        deletealltask();
    });
}
executelisteners();
