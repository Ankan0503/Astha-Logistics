function openModal(imgSrc) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = imgSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

