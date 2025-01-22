
const generateBtn = document.querySelector(".generate");
const newqrBtn = document.querySelector(".newQR");

const qrInput = document.getElementById("qrinput");
let imageContainer = document.querySelector(".img-container");
const QRimage = document.getElementById("qrimage");


generateBtn.addEventListener("click", () => {

    if (qrInput.value === "") {
        qrInput.classList.add("error");
        setTimeout(() => {
        qrInput.classList.remove("error");

        }, 500);
    } else {
        imageContainer.classList.remove("hidden");
        generateBtn.classList.add("hidden");
        newqrBtn.classList.remove("hidden");

        QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + qrInput.value;
    }

    
})


newqrBtn.addEventListener("click", () => {
    imageContainer.classList.add("hidden");
    qrInput.value = "";
    newqrBtn.classList.add("hidden");
    generateBtn.classList.remove("hidden");
})
