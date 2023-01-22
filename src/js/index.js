const btnTrailer = document.getElementById("botao-trailer");
const btnFecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal");
const video = document.getElementById("video");
const linkVideo = video.src;


btnTrailer.addEventlistener("click", () => {
    modalClass();
video.src = linkVideo;
});

btnFecharModal.addEventlistener("click", () => {
    modalClass();
video.src = "";
});

function modalClass() {
    modal.classList.toggle("aberto");
};
