window.onload = function () {
  startFunction();
};

startFunction = () => {};
function openDialog(dialogType, gameName) {
  let link = "";

  switch (gameName) {
    case "snake":
      link = "https://nimisha56.github.io/SnakeGame/";
      break;
    case "bouncy ball":
      link = "https://nimisha56.github.io/BouncyBallProject/ ";
      break;
    case "omnifood":
      link = "https://nimisha56.github.io/Omnifood/";
      break;
    case "myWebsite":
      link = "https://nimisha56.github.io/MyWebsiteProject/";
      break;
    case "24/7DeliveryServices":
      link = " https://github.com/NIMISHA56/WebDevProject/";
      break;
    case "cityPopulationTracker":
      link = "https://github.com/NIMISHA56/CityPopulation/";
      break;
  }

  if (dialogType === "viewProject") {
    window.open(link);
  } else {
    createIframe(link);
  }
}

function createIframe(link) {
  let dialogModal = document.getElementById("div_modal");
  dialogModal.style.display = "block";
  let dialog = document.getElementById("iframeDialog");
  let iframe = dialog.getElementsByTagName("iframe")[0];
  iframe.src = link;
  dialog.open = true;

  iframe.onload = setIframeFocus;
}

function closeDialog() {
  let dialogModal = document.getElementById("div_modal");
  let dialog = document.getElementById("iframeDialog");
  let iframe = dialog.getElementsByTagName("iframe")[0];
  iframe.src = "";
  dialogModal.style.display = "none";
  dialog.open = false;
}

function setIframeFocus() {
  iframe.focus();
}
