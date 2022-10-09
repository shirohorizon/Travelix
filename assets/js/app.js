// Scroll dom event
const header = document.querySelector('.header')
const topBar = document.querySelector('.top_bar')

const handleGetScrollY = () => {
    if (window.scrollY > 150) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}

window.addEventListener('scroll', handleGetScrollY)

// show and hide search form

const searchIcon = document.querySelector('#Layer_1')
const searchForm = document.querySelector('#search_form')
const searchInput = document.querySelector('.search_content_input')

const handleCloseSearchForm = (e) => {
    const isClose = e.target.closest('.search_content_input') || e.target.closest('#Layer_1')
    isClose ?? searchForm.classList.remove('active')
}

searchIcon.onclick = () => {
    searchForm.classList.toggle('active')
    window.addEventListener('click', handleCloseSearchForm)
}

// home slider
const prevSliderBtn = document.querySelector('.home_slider_prev')
const nextSliderBtn = document.querySelector('.home_slider_next')
const sliderStage = document.querySelector('.slider_stage')
const sliderItems = document.querySelectorAll('.slider_item')
const sliderCustomDots = document.querySelectorAll('.slider_custom_dot')

// set stage width 
const setWidthSlider = () => {
    const stageWidth = window.innerWidth * sliderItems.length
    const sliderWidth = window.innerWidth
    sliderStage.style.width = `${stageWidth}px`

    sliderItems.forEach(e => {
        e.style.width = `${sliderWidth}px`
    })

    return [stageWidth, sliderWidth]
}
setWidthSlider()
// set width when resize
window.addEventListener('resize', setWidthSlider)

// get 'next' or 'prev' string param return new active index
const setActiveSlider = (control) => {
    let activeIndex

    // get prev active index and remove all active
    sliderItems.forEach((e, index) => {
        if (e.classList.contains('active')) {
            activeIndex = index
        }
        e.classList.remove('active')
    })

    sliderCustomDots.forEach(e => e.classList.remove('active'))

    // set active index when next btn or prev btn click
    if (control === 'next') {
        activeIndex = activeIndex < sliderItems.length - 1 ? activeIndex + 1 : 0
    } else if (control === 'prev') {
        activeIndex = activeIndex > 0 ? activeIndex - 1 : sliderItems.length - 1
    }

    // set active
    sliderItems[activeIndex].classList.add('active')
    sliderCustomDots[activeIndex].classList.add('active')
    return activeIndex
}

const setSliderTransform = (control) => {
    const [stageWidth, sliderWidth] = setWidthSlider()
    const tranX = sliderWidth * setActiveSlider(control)
    sliderStage.style = `width: ${stageWidth}px ;transform: translateX(-${tranX}px); transition: all 0.8s ease;`
}

// next btn
nextSliderBtn.onclick = () => {
    setSliderTransform('next')
}

// prev btn
prevSliderBtn.onclick = () => {
    setSliderTransform('prev')
}


// Search
const searchTabs = document.querySelectorAll('.search_tab')

function handleSetActiveSearchTab() {
    searchTabs.forEach(e => e.classList.remove('active'))
    this.classList.add('active')
}

searchTabs.forEach(e => {
    e.addEventListener('click', handleSetActiveSearchTab)
})