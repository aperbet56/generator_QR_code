// Récupération des différents éléments
const resultQr = document.querySelector(".qrCode-result");
const btn = document.querySelector("form button");
const input = document.querySelector("form input");
const info = document.querySelector(".info");
const qr = document.querySelector(".qrCode-result img");
const regex =
  /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

btn.addEventListener("click", () => {
  let qrValue = input.value;
  if (regex.test(qrValue) == false) {
    info.textContent = "Veuillez renseigner une adresse URL";

    /* if (!qrValue) {
    info.textContent = "Veuillez renseigner une adresse URL";
    btn.textContent = "Générer le QR code";*/
  } else {
    info.textContent = "";
    qr.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qr.addEventListener("load", () => {
      resultQr.classList.add("active");
    });
  }
});

input.addEventListener("keyup", () => {
  if (!input.value) {
    resultQr.classList.remove("active");
  }
});
