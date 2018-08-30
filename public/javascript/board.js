var zodiacList = document.querySelectorAll('#zodiacItem');

// function to create Array of zodiacs
var zodiacArr = function (nl) {
    var nArr = Array.from(nl);
    return nArr.map(function (el) {
        return el.innerText;
    })
}

// function to render list items
var makeList = function (arr) {
    var ul = document.querySelector("#horoUl");
    for (i = 0; i < arr.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerText = arr[i];
        ul.appendChild(listItem);
    }
}

window.addEventListener("load", function () {
    //function to get horoscope for single zodiac
    var horoArr = [];
    var getHoroscope = function (zodiacArr) {
        for (i = 0; i < zodiacArr.length; i++) {
            var URL = "https://aztro.sameerkumar.website/?sign=" + zodiacArr[i] + "&day=today";
            fetch(URL, {
                method: 'POST'
            })
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    horoArr.push(json.description)
                    if (horoArr.length === zodiacArr.length) {
                        makeList(horoArr);
                    }
                })
        }

    }
    getHoroscope(zodiacArr(zodiacList));
})

var deleteButtons = document.querySelectorAll('.delete');

/* add event listeners to delete items */

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = '/deleteentry/' + event.target.id;
    });
}

var addContainer = document.querySelector('#add_bday');
addContainer.classList.add("hidden");
var drawerBtn = document.querySelector('#drawer-button');

drawerBtn.addEventListener('click', function (e) {
    addContainer.classList.toggle("hidden");
})
