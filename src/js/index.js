const btnTrailer = document.getElementById("botao-trailer");
const btnFecharModal = document.getElementById("fechar-modal");
const modal = document.getElementById("modal");
const video = document.getElementById("video");
const linkVideo = video.src;


function modalClass() {
    modal.classList.toggle("aberto");
};


btnTrailer.addEventListener("click", () => {
    modalClass();
video.src = linkVideo;
});

btnFecharModal.addEventListener("click", () => {
    modalClass();
video.src = "";
});
