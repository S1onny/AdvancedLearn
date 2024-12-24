export const headerScroll = () => {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
    const content = document.querySelector('.cont');
    const contentHeight = content.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;

        if (scrollDistance > lastScrollTop) {
            header.classList.remove('header--show');
            content.style.margintop = null;
        } else {
            header.classList.add('header--show');
            content.style.margintop = '${headerHeight}px';
        }

        if (scrollDistance === 0) {
            // header.classList.remove('header--fixed');
            header.classList.add('header--show');
            content.style.margintop = 0;
        };

        lastScrollTop = scrollDistance;
    });
};
