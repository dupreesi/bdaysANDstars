var join = document.querySelector('#join');
var joinBoardInput = document.querySelector('#board_name');
// set up function that links to board based on users input
var joinTable = function () {
    console.log(joinBoardInput.value);

    if (joinBoardInput.value) {
        var boardName = joinBoardInput.value;
        window.location.href = '/board/' + boardName;
    }
};
joinBoardInput.addEventListener('click', function (event) {
    event.stopPropagation();
});
// enable submit on enter
joinBoardInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
        joinTable();
    }
});
// call function on click
join.addEventListener('click', function (e) {
    joinTable();
});