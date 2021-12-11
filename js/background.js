const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
];

function paintBackground() {
    const img = document.createElement("img");
    const todayImg = images[Math.floor(Math.random() * images.length)];
    img.src = `img/${todayImg}`;

    console.log(img);
    document.body.appendChild(img);
}

paintBackground();