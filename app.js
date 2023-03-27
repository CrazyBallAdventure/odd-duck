const images = ['./assets/bag.jpg','./assets/banana.jpg','./assets/bathroom.jpg','./assets/boots.jpg','./assets/breakfast.jpg','./assets/bubblegum.jpg','./assets/chair.jpg','./assets/cthulhu.jpg','./assets/dog-duck.jpg','./assets/dragon.jpg','./assets/pen.jpg','./assets/scissors.jpg','./assets/shark.jpg','./assets/sweep.png','./assets/tauntaun.jpg','./assets/unicorn.jpg','./assets/water-can.jpg','./assets/wine-glass.jpg'];

const imagesCount = {};
let previousImages = [];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function refreshImages() {
    let product1Image = getRandomElement(images);
    while (previousImages.includes(product1Image)) {
        product1Image = getRandomElement(images);
    }
    product1Span.innerHTML = `<img class='img' src="${product1Image}">`;
    previousImages[0] = product1Image;

    let product2Image = getRandomElement(images);
    while (previousImages.includes(product2Image)) {
        product2Image = getRandomElement(images);
    }
    product2Span.innerHTML = `<img class='img' src="${product2Image}">`;
    previousImages[1] = product2Image;

    let product3Image = getRandomElement(images);
    while (previousImages.includes(product3Image)) {
        product3Image = getRandomElement(images);
    }
    product3Span.innerHTML = `<img class='img' src="${product3Image}">`;
    previousImages[2] = product3Image;

    if (imagesCount[product1Image]) {
        imagesCount[product1Image]++;
    } else {
        imagesCount[product1Image] = 1;
    }

    if (imagesCount[product2Image]) {
        imagesCount[product2Image]++;
    } else {
        imagesCount[product2Image] = 1;
    }

    if (imagesCount[product3Image]) {
        imagesCount[product3Image]++;
    } else {
        imagesCount[product3Image] = 1;
    }
}

const product1Span = document.getElementById('product-1');
const product2Span = document.getElementById('product-2');
const product3Span = document.getElementById('product-3');

refreshImages();

product1Span.addEventListener('click', refreshImages);
product2Span.addEventListener('click', refreshImages);
product3Span.addEventListener('click', refreshImages);

const viewResultsBtn = document.querySelector('.view-results-btn');
viewResultsBtn.addEventListener('click', showResults);

function showResults() {
  const labels = Object.keys(imagesCount);
  const data = Object.values(imagesCount);

  const canvas = document.getElementById('results-chart');

  const chart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Image Votes',
        data: data,
        backgroundColor: [
            "#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE",

        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: 'Image Votes'
      }
    }
  });
}