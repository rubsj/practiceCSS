document.addEventListener('DOMContentLoaded', () => {
    console.log('document loaded event called');
    const amount = 25;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let node = document.createElement('i');
        const posx = Math.floor(Math.random() * window.innerWidth);
        const posy = Math.floor(Math.random() * window.innerHeight);
        const rotation = Math.random() * 180;
        const delay = Math.random() * 20;
        const scale = Math.random() * .2;
        node.style.left = `${posx}px`;
        node.style.top = `${posy}px`;
        node.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        node.style.animationDelay = `${delay}s`;
        body.appendChild(node);
        i++;
    }
});