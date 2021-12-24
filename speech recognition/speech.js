let start = document.getElementById('start');
let lang = document.querySelector('#lang');
let result = document.querySelector('.result');
let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.interimResults = true;
lang.addEventListener('change', (e) => {
    console.log(e);
    recognition.lang = e.target.value;
})
start.addEventListener('click', (e) => {
    console.log("start");
    console.log(e);
    recognition.start();
})
recognition.addEventListener('audiostart',(e) => {
    start.innerHTML = "Listening....";
});
recognition.addEventListener('result',(e) => {
    console.log(e.results[0][0].transcript);
    result.innerHTML = e.results[0][0].transcript;
});
recognition.addEventListener('audioend',(e) => {
    start.innerHTML = "Start";
});