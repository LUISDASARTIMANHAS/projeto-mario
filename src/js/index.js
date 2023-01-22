const btnTrailer = document.getElementById("botao-trailer");
const btnFecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal");
const video = document.getElementById("video");
const linkVideo = video.src;


btnTrailer.addEventlistener("click", () => {
    alternarModal();
video.src = linkVideo;
});

btnFecharModal.addEventlistener("click", () => {
    alternarModal();
video.src = "";
});

function modalClass() {
    modal.classList.toggle("aberto");
};