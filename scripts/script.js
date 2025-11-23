// simple activation handler for bottom nav
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;
    const items = Array.from(nav.querySelectorAll('.nav-item'));

    function setActive(clicked) {
        items.forEach(it => it.classList.toggle('active', it === clicked));
    }

    items.forEach(it => {
        it.addEventListener('click', () => setActive(it));
        it.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActive(it);
            }
        });
    });
});