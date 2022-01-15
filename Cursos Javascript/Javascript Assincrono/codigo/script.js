const img = document.getElementById('cat');
const button = document.getElementById('button');

async function getCat() {
    let data = await fetch('https://thatcopy.pw/catapi/rest/')
        .then(result => result.json())
        .catch(err => console.log(err.message));
    return data.webpurl;
}

const changeCat = async () => {img.src = await getCat()};

button.addEventListener('click', changeCat);

changeCat();