const toggle = document.querySelector('input[type="checkbox"]');

toggle.addEventListener('click', () => {
    const body = document.querySelector('body');

    body.classList.toggle('dark-mode');
})