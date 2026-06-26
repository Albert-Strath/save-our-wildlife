document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("wildlifeVideo");
    const button = document.getElementById("videoBtn");

    button.addEventListener("click", () => {
        // If the video is paused or has not started, play it.
        if (video.paused) {
            video.play();
            button.textContent = "Pause Video";
        } else {
            // If it is playing, pause it. 
            video.pause();
            button.textContent = "Play Video";
        }
    });
});