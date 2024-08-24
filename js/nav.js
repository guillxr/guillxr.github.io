window.addEventListener('scroll', () => {
    const nav = document.querySelector('#menu');
    const scrollLimit = window.innerWidth > 834 ? 100 : 40;
    nav.classList.toggle('scroll', window.scrollY > scrollLimit);

    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        if (window.scrollY >= section.offsetTop - section.clientHeight / 7) {
            currentSection = section.id;
        }
    });

    document.querySelectorAll('.sections a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
    });
});
