const overlayOne = document.getElementById("pOne-overlay");
const pOneTile = document.getElementById("pOne");
const overlayTwo = document.getElementById("pTwo-overlay");
const pTwoTile = document.getElementById("pTwo");
const overlayThree = document.getElementById("pThree-overlay");
const pThreeTile = document.getElementById("pThree");

const showOverlayOne = () => {
  overlayOne.style.display = "flex";
};
const hideOverlayOne = () => {
  overlayOne.style.display = "none";
};

const showOverlayTwo = () => {
  overlayTwo.style.display = "flex";
};
const hideOverlayTwo = () => {
  overlayTwo.style.display = "none";
};

const showOverlayThree = () => {
  overlayThree.style.display = "flex";
};
const hideOverlayThree = () => {
  overlayThree.style.display = "none";
};

pOneTile.addEventListener("mouseover", showOverlayOne);
pTwoTile.addEventListener("mouseover", showOverlayTwo);
pThreeTile.addEventListener("mouseover", showOverlayThree);

pOneTile.addEventListener("mouseout", hideOverlayOne);
pTwoTile.addEventListener("mouseout", hideOverlayTwo);
pThreeTile.addEventListener("mouseout", hideOverlayThree);
