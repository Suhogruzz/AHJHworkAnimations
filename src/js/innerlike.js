export default function likeHeart(element) {
    let trajectory = Math.trunc(Math.random() * 4) + 1;
    let heart = document.createElement('img');
    heart.classList.add(`heart`, `heart-${trajectory}`);
    heart.addEventListener('animationend', () => {
        heart.remove();
    })
    element.appendChild(heart);
}