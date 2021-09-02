

const loadQuates =() => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuates(data))
}

loadQuates();
const displayQuates = (quote) => {
const quatesElemnet = document.getElementById('quate');
quatesElemnet.innerText= quote.quote;
}