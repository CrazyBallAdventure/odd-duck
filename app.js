const images = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg']

const imagesCount = {};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function refreshImages() {
    const product1Image = getRandomElement(images);
    product1Span.innerHTML = `<img class='img' src="images/${product1Image}">`;
    if (imagesCount[product1Image]) {
        imagesCount[product1Image]++;
    } else {
        imagesCount[product1Image] = 1;
    }

    const product2Image = getRandomElement(images);
    product2Span.innerHTML = `<img class='img' src="images/${product2Image}">`;
    if (imagesCount[product2Image]) {
        imagesCount[product2Image]++;
    } else {
        imagesCount[product2Image] = 1;
    }

    const product3Image = getRandomElement(images);
    product3Span.innerHTML = `<img class='img' src="images/${product3Image}">`;
    if (imagesCount[product3Image]) {
        imagesCount[product3Image]++;
    } else {
        imagesCount[product3Image] = 1;
    }
    }


    const product1Span = document.getElementById('product-1')
    const product2Span = document.getElementById('product-2')
    const product3Span = document.getElementById('product-3')

    refreshImages();


    product1Span.addEventListener('click', refreshImages);
    product2Span.addEventListener('click', refreshImages);
    product3Span.addEventListener('click', refreshImages);