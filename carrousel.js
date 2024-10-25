const images = [
    {src:'https://cdn.cloudflare.steamstatic.com/steam/apps/632360/ss_2bb49071317f7b241a527cf6e7aabd2cb6af055b.600x338.jpg?t=1699992764',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    },
    {src: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/250900/ss_ffac64b3c52a148ed6100c8b0ab87d011274991c.600x338.jpg?t=1722458438',
        link: 'https://proxy4692.github.io/vaporcito/articulo.html'
    },
    {src: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/ss_e5a94665dbfa5a30931cff2f45cdc0ebea9fcebb.600x338.jpg?t=1726188854',
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