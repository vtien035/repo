document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
    event.preventDefault();
    const id = item.getAttribute('href').substring(1);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
    });