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
alert('Доброго времени суток, проверяющий. Прошу подождать с проверкой.\nДо четверга постараюсь сделать. Спасибо.');