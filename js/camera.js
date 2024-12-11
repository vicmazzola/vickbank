const btnStartCamera = document.querySelector("[data-video-button]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTakePhoto = document.querySelector("[data-take-photo]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-message]");
const btnSendPhoto = document.querySelector("[data-send]");

let imageURL = '';

btnStartCamera.addEventListener('click', async function () {
    const startVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false });

    btnStartCamera.style.display = "none";
    cameraField.style.display = "block";

    video.srcObject = startVideo;
});

btnTakePhoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    cameraField.style.display = "none";
    message.style.display = "block";
});

btnSendPhoto.addEventListener('click', () => {
    const existingData = localStorage.getItem("registration");
    const parsedData = JSON.parse(existingData);

    parsedData.image = imageURL;

    localStorage.setItem('registration', JSON.stringify(parsedData));

    window.location.href = '../pages/open-account-form3.html';
});
