// Scroll dom event
const header = document.querySelector('.header')
const topBar = document.querySelector('.top_bar')

const handleGetScrollY = () => {
    if (window.scrollY > 400) {
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