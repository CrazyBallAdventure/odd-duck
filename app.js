const images = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg'];

//counts the images and identifies previous images
let previousImages = [];

//this is for randomizing
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//Starts the count at zero
const imagesCount = Object.fromEntries(images.map(image => [image, 0]));

//refreshes images
function refreshImages() {
  const availableImages = images.filter(image => !previousImages.includes(image));
  const selectedImages = [];
  
  for (let i = 0; i < 3; i++) {
    // Picks a random image from my available images pool
    const imageIndex = Math.floor(Math.random() * availableImages.length);
    const selectedImage = availableImages[imageIndex];
    
    // TAKES THAT IMAGE OUT OF THE AVAILABLE IMAGES POOL
    availableImages.splice(imageIndex, 1);
    
    // Makes the image a product
    const productElement = [product1Span, product2Span, product3Span][i];
    productElement.innerHTML = `<img class='img' src="assets/${selectedImage}">`;
    
    // Adds the selected image to the selected images array
    selectedImages.push(selectedImage);
  }
  
  // Updates the previous images array
  previousImages = selectedImages;
  
  // Increment the count for the selected images
  selectedImages.forEach(image => {
    imagesCount[image]++;
  });
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