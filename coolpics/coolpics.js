
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    function toggleMenu() {
        menu.classList.toggle("hide");
    }

    menuButton.addEventListener("click", toggleMenu);

    function handleResize() {
        if (window.innerWidth > 1000) {
            menu.classList.remove("hide");
        } else {
            menu.classList.add("hide");
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    function viewerTemplate(src, alt) {
        return `
            <div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${src}" alt="${alt}">
            </div>
        `;
    }

    function viewHandler(event) {
        const element = event.target;
        if (element.tagName === 'IMG') {
            const src = element.src.split('-')[0] + '-full.jpg';
            const alt = element.alt;
            document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));
            document.querySelector(".close-viewer").addEventListener("click", closeViewer);
        }
    }

    function closeViewer() {
        const viewer = document.querySelector(".viewer");
        if (viewer) {
            viewer.remove();
        }
    }

    document.querySelector(".gallery").addEventListener("click", viewHandler);
});
