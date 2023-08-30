import collapseElement from "./innercollapsible";


export default class Controller {
    constructor() {
    };
    eventHandler() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            if(target.classList.contains('collapsible')) {
                collapseElement(target)
            }
        })
    }
  
};
