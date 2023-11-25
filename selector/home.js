
function listeningForEventClick() {

    if (document.querySelector('h1').innerHTML === 'a') {
        document.querySelector('h1').innerHTML = 'b';
    } else {
        document.querySelector('h1').innerHTML = 'a';
    }
}

