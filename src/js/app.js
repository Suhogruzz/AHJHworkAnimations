import Controller from "./controller";

const main = document.querySelector(".main");


document.addEventListener("DOMContentLoaded", () => {
    const controller = new Controller;
    controller.bindToDOM(main);
    controller.drawElements();
    controller.eventHandler();
})