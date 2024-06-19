document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".preloader");
  const video = document.querySelector(".video-container");
  const switchBtn = document.querySelector(".switch-btn");
  const switchSpan = switchBtn.querySelector(".switch");
  const spans = switchBtn.querySelectorAll("span");

  // Hide preloader once the page is fully loaded
  window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
  });

  // Function to toggle video play state and update button text
  const togglePlayPause = () => {
    if (video.paused) {
      video.play();
      spans[0].style.display = "none"; // hide 'play'
      spans[1].style.display = "inline"; // show 'pause'
      switchSpan.style.left = "50%";
    } else {
      video.pause();
      spans[0].style.display = "inline"; // show 'play'
      spans[1].style.display = "none"; // hide 'pause'
      switchSpan.style.left = "0";
    }
  };

  // Initial button text setup
  spans[0].style.display = video.paused ? "inline" : "none";
  spans[1].style.display = video.paused ? "none" : "inline";

  // Add event listener to the button to toggle video play state
  switchBtn.addEventListener("click", togglePlayPause);
});
