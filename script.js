const images = [
"assets/bg1.jpg",
"assets/bg2.jpg",
"assets/bg3.jpg"
];

let index = 0;

function changeBackground() {
document.getElementById("bg").style.backgroundImage =
`url(${images[index]})`;
index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 10000);
