(() => {

    const nav = document.querySelector('nav');
    const logo = document.querySelector('.intro-logo > img');
    // const scrollWatcher = document.createElement('div');

    // scrollWatcher.setAttribute('data-scroll-watcher', '');
    // logo.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        nav.classList.toggle('show', !entries[0].isIntersecting)
    });

    navObserver.observe(logo);

})();