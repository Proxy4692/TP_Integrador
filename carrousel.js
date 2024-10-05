const images = ['image1.jpg, image2.jpg, image3.jpg']
let currentIndex = 0

const carrouselImage = document.getElementById('carrouselImage')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    carrouselImage.src = images[currentIndex]
})

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    carrouselImage.src = images[currentIndex]
})