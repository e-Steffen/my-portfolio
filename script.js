const hiddenOverlayOne = document.getElementById("pOne-overlay");
const BlaBlub = document.getElementById("pOne");
const hiddenOverlayTwo = document.getElementById("pTwo-overlay");
const hiddenOverlayThree = document.getElementById("pThree-overlay");

const showOverlayOne = () => {
  hiddenOverlayOne.style.display = "flex";
};

BlaBlub.addEventListener("mouseover", showOverlayOne);
