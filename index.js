window.onload = function () {
  startFunction();
};

startFunction = () => {};

function openDialog(dialogType, gameName) {
  switch (gameName) {
    case "snake":
      createIframe("https://nimisha56.github.io/SnakeGame/");
      break;
    case "bouncy ball":
      createIframe("https://nimisha56.github.io/FlappyBirdProject/");
      break;
    case "omnifood":
      createIframe("https://nimisha56.github.io/Omnifood/");
      break;
    case "myWebsite":
      createIframe("https://nimisha56.github.io/MyWebsiteProject/");
      break;
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
