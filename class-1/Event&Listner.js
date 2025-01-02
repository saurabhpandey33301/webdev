let i = 0;
function changeText() {
    if (i === 0) {
    document.getElementById('btn').innerHTML = 'clicked';
    i = 1;
    } else {
    document.getElementById('btn').innerHTML = 'click me!';
    i = 0;
    }
}
let btn = document.getElementById('btn');
btn.addEventListener('click', changeText);

function alertPara(event){
    if(event.target.nodeName === 'SPAN'){
        alert("you clicked on paragraph"+event.target.textContent);
    }
}
document.addEventListener('click', alertPara);