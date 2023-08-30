export default function collapseElement(element) {
    element.classList.toggle('active');
    let content = element.nextElementSibling;
    let style = content.style.maxHeight? null : content.scrollHeight + 'px';
    content.style.maxHeight = style;
}
