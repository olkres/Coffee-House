// BURGER
(function () {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.nav');

    const body = document.body;

    
     burger.addEventListener('click', () => {
         burger.classList.toggle('active');   
         menu.classList.toggle('nav-active');
         body.classList.toggle('no-scroll');
         
     });
     menu.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			burger.classList.remove('active')
			menu.classList.remove('nav-active')
			body.classList.remove('no-scroll')
		})
	})
 }());

 //SLIDER

 const sliderImages = document.querySelectorAll('.coffee'),
       sliderLine = document.querySelector('.slider'),
       sliderControls = document.querySelectorAll('.control'),
       sliderBtnNext = document.querySelector('.right-btn'),
       sliderBtnPrev = document.querySelector('.left-btn');
     
// Переменные    
let sliderCount = 0,
 sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

//Слушатели перелистывания слайдов
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Автоматическое перелистывание слайдов
setInterval(() => {
    nextSlide()
}, 5000);

// Ширина блоков coffee и slider
function showSlide() {
 sliderWidth = document.querySelector('.slider').offsetWidth;
 sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
 sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

 rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
 sliderCount++;
 if (sliderCount >= sliderImages.length) sliderCount = 0;

 rollSlider();
 thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
 sliderCount--;
 if (sliderCount < 0) sliderCount = sliderImages.length -1;

 rollSlider();
 thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
 sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
 sliderControls.forEach(item => item.classList.remove('active'));
 sliderControls[index].classList.add('active');
}

// Клик на control 
sliderControls.forEach((dot, index) => {
 dot.addEventListener('click', () => {
     sliderCount = index;
     rollSlider();
     thisSlide(sliderCount);
 })
})

