const tema = document.getElementById('tema');
const icon = document.getElementById('icon-mod');
const documento = document.documentElement;

tema.addEventListener('click',()=>{
    const ativ = documento.getAttribute('data-bs-theme');
    documento.setAttribute('data-bs-theme', ativ === 'dark' ? 'light':'dark');
    if (ativ === 'dark') {
      icon.setAttribute('class', 'bi bi-brightness-high');
    } else {
      icon.setAttribute('class', 'bi bi-moon-fill text-white');
    }
})