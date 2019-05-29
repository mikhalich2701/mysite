$( document ).ready(function() {

    // Настройка слайдера

<<<<<<< HEAD
    $('.pageProofs__resurse-row').slick({             
=======
    $('.slider__row').slick({             
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
  		autoplaySpeed: 2000,
<<<<<<< HEAD
        nextArrow: '.pageProofs__resurse-button-next',
        prevArrow: '.pageProofs__resurse-button-prev',
=======
        nextArrow: '.slider__button--next',
        prevArrow: '.slider__button--prev',
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('#contianer').mixItUp({
        selectors: {
<<<<<<< HEAD
            target: '.works__block-elem'
=======
            target: '.boxItem'
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
        }
    });

    var windowHeight = $(window).height();

    // Плавный скролл к метке

    $('a[href^="#"]').click(function () {                 
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html').animate( { scrollTop: destination }, 1100 );
    	return false;
    });

    // Анимация кнопки меню при клике

<<<<<<< HEAD
    $('.headerUp__navicon').click(function () {        
        if ($(this).attr('class') == 'headerUp__navicon change') {
=======
    $('.header__btnGuide').click(function () {        
        if ($(this).hasClass('change')) {
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
            $(this).removeClass('change');
        } else {
            $(this).addClass('change');
        }
    });

    // Анимация выпадающего меню

<<<<<<< HEAD
    $('.headerUp__navicon').click(function(){          
        $('.mainMenu').slideToggle();
    });

    $('.mainMenu__elem').click(function(){ 
        $('.headerUp__navicon').removeClass('change');
        if ($(window).width() <= 992) {
            $('.mainMenu').slideToggle();
=======
    $('.header__btnGuide').click(function(){          
        $('.header__navbar').slideToggle();
    });

    $('.navbar__link').click(function(){ 
        $('.header__btnGuide').removeClass('change');
        if ($(window).width() <= 992) {
            $('.header__navbar').slideToggle();
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
        }
    });

    // Появление пунктов навигации при увеличении экрана

    $(window).resize(function() {                        
        if ($(window).width() > 992) {
<<<<<<< HEAD
            $('.mainMenu').removeAttr('style');
=======
            $('.navbar').removeAttr('style');
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
        }
    });

    // Появление кнопки скролла

<<<<<<< HEAD
    $(window).scroll(function () {
        var interval = $('.headerDown').height();
    	var scrollBar = $('.skills').height();        
		if ($(this).scrollTop() > interval) {
			$('.headerDown__scrollBtn').css("display", "block");  
		} else {
			$('.headerDown__scrollBtn').css("display", "none");
=======
    $(window).scroll(function () {       
		if ($(this).scrollTop() > $(window).height() * 0.2) {
			$('.btnScroll').css("display", "flex");  
		} else {
			$('.btnScroll').css("display", "none");
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
		}

    // Затемнение пунктов меню по скроллу

<<<<<<< HEAD
        $('h2').each(function() {
=======
        $('.sectionTitle').each(function() {
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
            var self = $(this),
                atribute = self.attr('id'),
                height = self.offset().top + self.height()/2 - windowHeight/2;
            if ($(document).scrollTop() >= height) {
<<<<<<< HEAD
                $('.mainMenu__elem').removeClass('menuBg');
=======
                $('.navbar__link--header').removeClass('menuBg');
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
                $('[href*="' + atribute + '"]').addClass('menuBg');
            } else {
                $('[href*="' + atribute + '"]').removeClass('menuBg');
            }
        });
	});

    // Скролл к началу страницы

<<<<<<< HEAD
	$('.headerDown__scrollBtn').click(function() {         
=======
	$('.btnScroll').click(function() {         
>>>>>>> cc6cf5e9352b45ef9be04eb06b9772ef4488731f
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

    // jQuery Validate JS

    $("#myForm").validate({
        rules: {
            name: { 
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true 
            },
            subject: { 
                required: true,
                minlength: 5 
            },
            message: { 
                required: true,
                minlength: 20
            }
        },

        messages: {
            name: { 
                required: "Пожалуйста, введите свое имя",
                minlength: "Длина имени должно быть менее 3х букв" 
            },
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
            },
            subject: {
                required: "Пожалуйста, введите название темы",
                minlength: "Название темы должно быть менее 5ти букв" 
             },
             message: {
                required: "Пожалуйста, введите текст сообщения",
                minlength: "Не менее 20ти символов" 
             }
        },

        submitHandler: function(form) {
          ajaxFormSubmit();
        }


    });

    // Функция AJAX запрса на сервер
    function ajaxFormSubmit(){
        var string = $("#myForm").serialize(); // Соханяем данные введенные в форму в строку. 

        // Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string
            
            // Функция если все прошло успешно
            success: function(html){
                $("#myForm").slideToggle(800);
                $('#answer').html(html);

                // Удаление сообщения от удачной отправке
                $('.contact-form__success').on('click', function(){
                    $("#myForm")[0].reset();
                    $('.contact-form__success').detach();
                    $("#myForm").slideToggle(800);
                });
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false; 
    }   

});