document.addEventListener("DOMContentLoaded", () => {
  const video1 = document.getElementById("background-video1");
  const video2 = document.getElementById("background-video2");

  video2.load();
  video2.pause();

  video1.addEventListener("ended", () => {
    video1.style.display = "none";

    video2.style.display = "block";
    video2.play();
    video2.loop = true;
  });
});
