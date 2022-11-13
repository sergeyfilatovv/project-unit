$(document).ready(function(){
    // Находим блок со слайдами и кастомные кнопки вперед/назад
    const owl =$('#clients-slider')
    const NextBtn =$('#NextBtn')
    const PrevBtn =$('#PrevBtn')
// Запускаем карусель
    owl.owlCarousel({
        items:1,
        loop:true   
    });
    // Клик на кнопку вперед и прокрутка карусели
    NextBtn.click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Клик на кнопку назад и прокрутка карусели
    PrevBtn.click(function() {
        owl.trigger('prev.owl.carousel');
    })
  });


 

