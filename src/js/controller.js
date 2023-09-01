import collapseElement from "./innercollapsible";
import likeHeart from "./innerlike";


export default class Controller {
    constructor() {
        this.main = null;
    };

    bindToDOM(main) {
        if (!(main instanceof HTMLElement)) {
            throw new Error("main is not a HTMLElement");
        }
        this.main = main;
    }

    drawElements() {
        this.main.innerHTML = `
        <button type="button" class="collapsible">Collapse</button>
        <div class="content">
            <p>"jQuery не нужен"</p>
        </div>
        <button type="button" class="like">Like</button>
        `
    }

    eventHandler() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('collapsible')) {
                e.preventDefault();
                collapseElement(target)
            }
            if (target.classList.contains('like')) {
                e.preventDefault();
                likeHeart(target);
            } 
        })
    }
  
};
