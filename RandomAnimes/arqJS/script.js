const animeList = [
    {
        name: "Attack on Titan",
        description: "TAKAKAE ",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    },
    {
        name: "Death Note",
        description: "Simplesmente o próprio Kira",
        image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
    },
    {
        name: "One Punch Man",
        description: "Esse careca é engraçado",
        image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
    },
    {
        name: "Dragon Ball Super",
        description: "Goku sola.",
        image: "https://cdn.myanimelist.net/images/anime/7/74606.jpg",
    },
    {
        name: "Naruto",
        description: "O naruto pode ser um pouco duro as vezes...",
        image: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
    },
    {
        name: "parasyte",
        description: "muito bommm",
        image: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
    },
    {
        name: "Dr.stone",
        description: "brabissimo!",
        image: "https://cdn.myanimelist.net/images/anime/1673/134757.jpg",
    },
    {
        name: "One piece",
        description: "pirata que esticakkkkkkkkk muito ruim",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    },
    {
        name: "Kakegurui",
        description: "Anime de quem joga no bicho",
        image: "https://cdn.myanimelist.net/images/anime/3/86578.jpg",
    },
    {
        name: "Violet Evergarden",
        description: "Nunca assisti, mas recomendaram",
        image: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
    },
];

const button = document.getElementById("button");
const Aname = document.getElementById("Aname");
const description = document.getElementById("description");
const aImg = document.getElementById("aImg");

button.addEventListener("click", function () {
    const randomAnime = animeList[Math.floor(Math.random() * animeList.length)];
    Aname.textContent = randomAnime.name;
    description.textContent = randomAnime.description;
    aImg.src = randomAnime.image;
});
const body = document.querySelector("body");
const colors = ["#d8ac1c", "#cc4f33", "#5c0c23", "#204e8a", "#8b8120"];

button.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
});r

