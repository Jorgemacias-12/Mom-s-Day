const saludateElement = document.getElementById("saludate");
const date = new Date();

let index = 0;

const btn_prev = document.getElementById("prev");
const btn_next = document.getElementById("next");

const imageElement = document.getElementById("img-carrousel");

const greetUsers = () => {
    let currentHour = date.getHours();
    if (currentHour >= 0 && currentHour <= 11) {
        saludateElement.innerText += " buenos días";
    }
    if (currentHour >= 12 && currentHour <= 18) {
        saludateElement.innerText += " buenas Tardes";
    }
    if (currentHour >= 18 && currentHour <= 24) {
        saludateElement.innerText += " buenas noches";
    }
}

const imagesToDisplay = [
    "../resources/1.jpg",
    "../resources/2.jpg",
    "../resources/3.jpg",
    "../resources/4.jpg"
];

const prevImage = () => {
    if (index < 0) {
        index = imagesToDisplay.length - 1;
    }
    imageElement.src = imagesToDisplay[index];
}

const nextImage = () => {
    if (index >= imagesToDisplay.length) {
        index = 0;
    }
    imageElement.src = imagesToDisplay[index];
}

window.onload = () => {
    greetUsers();
    imageElement.src = "../resources/1.jpg";
    btn_next.addEventListener("click", () => {
        index++;
        nextImage();
    });
    btn_prev.addEventListener("click", () => {
        index--;
        prevImage();
    });
}


