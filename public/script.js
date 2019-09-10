const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.searchBox(searchElement)
searchBox.addListener('placer_changed',() =>{
    
})
