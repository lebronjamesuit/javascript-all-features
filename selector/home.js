
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
    document.querySelector('h1').innerHTML = count;
}

