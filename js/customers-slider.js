function addActive(elem) {
    elem.classList.add('slide-active');
}

function deleteActive(elem) {
    elem.classList.remove('slide-active');
}

function changeClass(item) {
    if (item.style.left == '250px' && item.className != 'slide-active') {
        addActive(item)
    } else if (item.style.left != '250px' && item.classList.contains('slide-active')) {
        deleteActive(item)
    }  
}


let slid_items = document.querySelectorAll(".customers__slide");
console.log(slid_items)


function draw() {
    let offset = -1;
    for (let i = 0; i < slid_items.length; i++) {
        let item = slid_items[i];
        item.style.left = offset * 250 + 'px';
        offset++;
        changeClass(item);
    }


};

draw();

function left() {
    for (let i = 0; i < slid_items.length; i++) {
        let item = slid_items[i];
        if (item.style.left == '750px') {
            item.style.zIndex = '0';
        }
        item.style.left = parseInt(item.style.left) - 250 + 'px';
        changeClass(item);

        if ((parseInt(item.style.left)) < -250) {
            item.style.zIndex = '-1';
            item.style.left = 750 + 'px';
        };
    };
}

function right() {

    for (let i = 0; i < slid_items.length; i++) {
        let item = slid_items[i];
        console.log(slid_items)
        if (item.style.left == '-250px') {
            item.style.zIndex = '1';
        }
        console.log(item.style.zIndex)
        item.style.left = parseInt(item.style.left) + 250 + 'px';
        changeClass(item);


        if ((parseInt(item.style.left)) > 750) {
            item.style.zIndex = '-1';
            item.style.left = -250 + 'px';
        };

        console.log(item.style.left)
        console.log(item.style.zIndex)

      
    };

}


let buttonPrew = document.getElementById('btn-prev');
let buttonNext = document.getElementById('btn-next');

buttonPrew.addEventListener('click', left)
buttonNext.addEventListener('click', right)