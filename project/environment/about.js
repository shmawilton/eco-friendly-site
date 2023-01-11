const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slideLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slideLength - 1) * 100}vh`


const leftButton = document.querySelector('.down-button');
const rightButton = document.querySelector('.up-button');

if (screen.width < 700) {
    leftButton.addEventListener('click', () => {
        leftSlide.style.transform = "translateX(100%)";
        rightSlide.style.transform = "translateX(0%)";

        // Check if the left-slide is at the end of the slide sequence
        if (leftSlide.classList.contains('reset')) {
            // Remove the reset class from the left-slide
            leftSlide.classList.remove('reset');
            // Add the reset class to the right-slide
            rightSlide.classList.add('reset');
        }
    });
    rightButton.addEventListener('click', () => {
        leftSlide.style.transform = "translateX(-100%)";
        rightSlide.style.transform = "translateX(0%)";

        // Check if the right-slide is at the end of the slide sequence
        if (rightSlide.classList.contains('reset')) {
            // Remove the reset class from the right-slide
            rightSlide.classList.remove('reset');
            // Add the reset class to the left-slide
            leftSlide.classList.add('reset');
        }
    });
} else {
    upBtn.addEventListener('click', () => changeSlide('up'))
    downBtn.addEventListener('click', () => changeSlide('down'))

    const changeSlide = (direction) => {
        const sliderHeight = sliderContainer.clientHeight
        // const sliderWidth = sliderContainer.clientWidth
        // console.log(sliderWidth)
        if (direction === 'up') {
            activeSlideIndex++
            if (activeSlideIndex > slideLength - 1) {
                activeSlideIndex = 0
            }
        } else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slideLength - 1
            }
        }

        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight
            }px)`
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight
            }px)`
    }
}



