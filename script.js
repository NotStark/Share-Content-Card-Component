// write your JavaScript here

const copyButton = document.querySelector(".wrapper p button");

const textToCopy = document.querySelector(".wrapper p span").textContent;

copyButton.addEventListener("click", () => {
  window.navigator.clipboard.writeText(textToCopy);
  copyButton.innerHTML = "Copied";
  setTimeout(() => {
    copyButton.innerHTML = "Copy";
  }, 5000);
});
