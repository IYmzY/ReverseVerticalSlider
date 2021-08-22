const sliderContainer = document.querySelector('.sliderContainer')
const rightSlide = document.querySelector('.rightSlide')
const leftSlide = document.querySelector('.leftSlide')
const upButton = document.querySelector('.upButton')
const downButton = document.querySelector('.downButton')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlide.getElementsByClassName.top = `-${(slidesLength - 1)}`