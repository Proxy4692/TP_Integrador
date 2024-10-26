const images = [
    {src:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/632360/header.jpg?t=1728672963',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    },
    {src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1729703045',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    },
    {src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg?t=1709879597',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    },
    {src:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1293830/header.jpg?t=1702576030',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    },
    {src:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg?t=1691508011',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    }
]
let currentIndex = 0

const carrouselImage = document.getElementById('carrouselImage')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    carrouselImage.src = images[currentIndex].src
})
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    carrouselImage.src = images[currentIndex].src
})
carrouselImage.addEventListener('click', () => {
    window.location.href = images[currentIndex].link
})