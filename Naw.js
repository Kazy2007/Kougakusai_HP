window.onload = function(){
let nav = document.querySelector("#menu");
let btn = document.querySelector(".humberger");
let mask = document.querySelector("#mask");
let hum = document.querySelector("hum");
let are = document.querySelector("#arere");

btn.onclick = () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
    mask.classList.toggle("open");
    hum.classList.toggle("open");
    are.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
    mask.classList.toggle("open");
    btn.classList.toggle("open");
    hum.classList.toggle("open");
    are.classList.toggle("open");
};

are.onclick = () => {
    nav.classList.toggle("open");
    mask.classList.toggle("open");
    btn.classList.toggle("open");
    hum.classList.toggle("open");
    are.classList.toggle("open");
}
}

//ふわっと出てくる出てくるから触るな！！！！！！！！！！
