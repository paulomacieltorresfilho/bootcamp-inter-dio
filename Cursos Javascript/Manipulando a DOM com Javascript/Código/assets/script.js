const botao = document.getElementById('botao');
const text = document.getElementsByTagName('p')[0];
const elements = document.querySelectorAll('.mode');

botao.addEventListener('click', () => {
    elements.forEach((item) => {
        item.classList.toggle('dark-mode');
    })
    botao.innerHTML = botao.innerHTML.includes('Light') ? 'Dark Mode': 'Light Mode';
    text.innerHTML = text.innerHTML.includes('Light') ? 'Dark Mode ON': 'Light Mode ON';
})