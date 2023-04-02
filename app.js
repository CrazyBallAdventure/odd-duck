const images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

//counts the images and identifies previous images
const imagesCount = {};
let previousImages = [];

//this is for randomizing
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//refreshes images
function refreshImages() {
  const product1Image = getRandomElement(images);
  product1Span.innerHTML = `<img class='img' src="assets/${product1Image}">`;
  if (imagesCount[product1Image]) {
    imagesCount[product1Image]++;
  } else {
    imagesCount[product1Image] = 1;
  }

  const product2Image = getRandomElement(images);
  product2Span.innerHTML = `<img class='img' src="assets/${product2Image}">`;
  if (imagesCount[product2Image]) {
    imagesCount[product2Image]++;
  } else {
    imagesCount[product2Image] = 1;
  }

  const product3Image = getRandomElement(images);
  product3Span.innerHTML = `<img class='img' src="assets/${product3Image}">`;
  if (imagesCount[product3Image]) {
    imagesCount[product3Image]++;
  } else {
    imagesCount[product3Image] = 1;
  }
}

//now they can go into my index
const product1Span = document.getElementById('product-1');
const product2Span = document.getElementById('product-2');
const product3Span = document.getElementById('product-3');

//now there will be a new set of images whenyou click
refreshImages();

product1Span.addEventListener('click', refreshImages);
product2Span.addEventListener('click', refreshImages);
product3Span.addEventListener('click', refreshImages);

//view results listener
const viewResultsBtn = document.querySelector('.view-results-btn');
viewResultsBtn.addEventListener('click', showResults);

function showResults() {
  const labels = Object.keys(imagesCount);
  const data = Object.values(imagesCount);

  //graph stuff
  const canvas = document.getElementById('results-chart');

  const chart = new Chart(canvas, {
    type: 'bar',
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