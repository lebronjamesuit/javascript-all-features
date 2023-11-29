
// Document is not ready
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('mmm')
});

// When DOM loading done, browsers will trigger this event for me
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = countClick;
});


function listeningForEventClick() {

    const h1InnerHtml = document.querySelector('h1').innerHTML
    if (h1InnerHtml === 'a') {
        document.querySelector('h1').innerHTML = 'b';
    } else {
        document.querySelector('h1').innerHTML = 'a';
    }
}

let count = 0;
function countClick() {
    count++;

    // Template literal
    if (count === 10) {
        alert(`this value is ${count}`);
    }
    document.querySelector('h1').innerHTML = count;
}



