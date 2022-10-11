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

// slider ulti
function slider(stage, sliderItems, itemWidth, sliderDots) {
    let stageWidth

    const setWidth = (width) => {
        stageWidth = width * sliderItems.length
        stage.style.width = `${stageWidth}px`

        sliderItems.forEach(e => {
            e.style.width = `${width}px`
        })
    }

    setWidth(itemWidth)


    const getActiveIndex = () => {
        let activeIndex

        // get activeIndex and remove all active
        sliderItems.forEach((e, index) => {
            if (e.classList.contains('active')) {
                activeIndex = index
            }
        })

        // set activeIndex = 0 if no active class
        return activeIndex = activeIndex ? activeIndex : 0
    }

    let activeIndex = getActiveIndex()

    const setActive = index => {
        sliderItems.forEach(e => e.classList.remove('active'))
        activeIndex = index
        activeIndex = activeIndex <= sliderItems.length - 1 ? activeIndex : 0
        activeIndex = activeIndex >= 0 ? activeIndex : sliderItems.length - 1

        if (sliderDots) {
            sliderDots.forEach(e => e.classList.remove('active'))
            sliderDots[activeIndex].classList.add('active')
        }

        sliderItems[activeIndex].classList.add('active')
        return index
    }

    let transX = activeIndex * itemWidth

    const setStageTranslateX = (transX, duration = 800) => {
        stage.style = `width: ${stageWidth}px ;transform: translateX(-${transX}px); transition: all ${duration / 1000}s ease;`
    }

    const next = duration => {
        setActive(activeIndex + 1)
        setStageTranslateX(itemWidth * activeIndex, duration)
    }

    const prev = duration => {
        setActive(activeIndex - 1)
        setStageTranslateX(itemWidth * activeIndex, duration)
    }

    return {
        next,
        prev,
        setWidth
    }
}

// home slider
const prevSliderBtn = document.querySelector('.home_slider_prev')
const nextSliderBtn = document.querySelector('.home_slider_next')
const sliderStage = document.querySelector('.slider_stage')
const sliderItems = document.querySelectorAll('.slider_item')
const sliderCustomDots = document.querySelectorAll('.slider_custom_dot')



const homeSlider = slider(sliderStage, sliderItems, window.innerWidth, sliderCustomDots)

// next btn
nextSliderBtn.onclick = () => {
    homeSlider.next()
}

// prev btn
prevSliderBtn.onclick = () => {
    homeSlider.prev()
}

const ctaSliderPrev = document.querySelector('.cta_slider_prev')
const ctaSliderNext = document.querySelector('.cta_slider_next')
const ctaStage = document.querySelector('.cta_stage')
const ctaSliderItems = document.querySelectorAll('.cta_slider_item')
const ctaStageOuter = document.querySelector('.cta_stage_outer')

const ctaSlider = slider(ctaStage, ctaSliderItems, ctaStageOuter.clientWidth)

ctaSliderNext.onclick = () => {
    console.log('haha');
    ctaSlider.next()
}
ctaSliderPrev.onclick = () => {
    ctaSlider.prev()
}

const handleResetWidth = () => {
    homeSlider.setWidth(window.innerWidth)
    ctaSlider.setWidth(ctaStageOuter.clientWidth)
}

// set width when resize
window.addEventListener('resize', handleResetWidth)


// Search
const searchTabs = document.querySelectorAll('.search_tab')

function handleSetActiveSearchTab() {
    searchTabs.forEach(e => e.classList.remove('active'))
    this.classList.add('active')
}

searchTabs.forEach(e => {
    e.addEventListener('click', handleSetActiveSearchTab)
})

// set bg_intro
const introBgURLs = [
    {
        src: '/assets/images/intro_1.jpg'
    },
    {
        src: '/assets/images/intro_2.jpg'
    },
    {
        src: '/assets/images/intro_3.jpg'
    },
]

const offerBgURLs = [
    {
        src: '/assets/images/offer_1.jpg'
    },
    {
        src: '/assets/images/offer_2.jpg'
    },
    {
        src: '/assets/images/offer_3.jpg'
    },
    {
        src: '/assets/images/offer_4.jpg'
    },
]

const introItems = document.querySelectorAll('.intro_item_background')
const offerItems = document.querySelectorAll('.offers_image_bg')

const setBgImg = (items, bgURLs) => {
    items.forEach((e, index) => {
        e.style.backgroundImage = `url('${bgURLs[index].src}')`
    })
}

setBgImg(introItems, introBgURLs)
setBgImg(offerItems, offerBgURLs)
