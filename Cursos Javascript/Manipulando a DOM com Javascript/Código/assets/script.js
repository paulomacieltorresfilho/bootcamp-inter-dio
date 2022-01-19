const botao = document.getElementById('botao')
const elements = document.querySelectorAll('.mode');

botao.addEventListener('click', () => {
    elements.forEach((item) => {
        item.classList.toggle('dark-mode');

        if (item.tagName === 'BUTTON') {
            if (item.innerHTML === 'Light Mode'){
                item.innerHTML = 'Dark Mode';
            } else {item.innerHTML = 'Light Mode'};
        }

    })
})