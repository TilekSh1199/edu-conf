/**
 * Hotel Omi
 *
 * This file contains all template JS functions
 *
 * @package Omi Hotel
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Dropdown Select
 * 02 - Search
 * 03 - Video Play
 * 04 - Elastic Slider
 * 05 - Mailchimp

--------------------------------------------------------------*/

(function($) {
  "use strict";

	// Dropdown Select
	$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
	  var $target = $( event.currentTarget );
	  $target.closest( '.uk-button-dropdown' )
	     .find( '[data-bind="label"]' ).text( $target.text() )
	        .end()
	     .children( '.dropdown-toggle' ).dropdown( 'toggle' );
	  return false;
	});

	// Search
    $('.search-icon').on('click', function (e) {
      e.preventDefault();
      $('.search').addClass('active');
    });
    $('.search-close').on('click', function (e) {
      e.preventDefault();
      $('.search').removeClass('active');
    });

	// Video Play
	$('.btn-video-play').on('click',function() {
	  $('.video-item .video-preview').append(video_url);
	  $(this).hide();
	});

	// Elastic Slider
		window.addEventListener('load', onWndLoad, false);
		function onWndLoad() {
	    var slider = document.querySelector('.slider');
	    var sliders = slider.children;
	    var initX = null;  
	    var transX = 0;
	    var rotZ = 0;
	    var transY = 0;
	    var curSlide = null;
	    var Z_DIS = 50;
	    var Y_DIS = 10;
	    var TRANS_DUR = 0.4;
	     var images=document.querySelectorAll('img');
	  for(var i=0;i<images.length;i++)
	    {
	      images[i].onmousemove=function(e){
	        e.preventDefault()      
	      }
	      images[i].ondragstart=function(e){
	        return false;     
	      }
	    }
	    function init() {    
	        var z = 0, y = 0;
	        for (var i = sliders.length-1; i >=0; i--) {
	            sliders[i].style.transform = 'translateZ(' + z + 'px) translateY(' + y + 'px)';          
	            z -= Z_DIS;
	            y += Y_DIS;
	        }
	        attachEvents(sliders[sliders.length - 1]);          
	    }
	    function attachEvents(elem) {
	        curSlide = elem;
	        curSlide.addEventListener('mousedown', slideMouseDown, false);
	        curSlide.addEventListener('touchstart', slideMouseDown, false);
	    }
	    init();
	    function slideMouseDown(e) {   
	        if (e.touches) {
	            initX = e.touches[0].clientX;
	        }
	        else {
	            initX = e.pageX;
	        }    
	        document.addEventListener('mousemove', slideMouseMove, false);
	        document.addEventListener('touchmove', slideMouseMove, false);
	        document.addEventListener('mouseup', slideMouseUp, false);
	        document.addEventListener('touchend', slideMouseUp, false);
	    }
	    var prevSlide = null;
	    function slideMouseMove(e) {
	        var mouseX;     
	        if (e.touches) {
	            mouseX = e.touches[0].clientX;
	        }
	        else {
	            mouseX = e.pageX;
	        }
	        transX += mouseX - initX;
	        rotZ = transX / 20;
	        transY = -Math.abs(transX / 15);   
	        curSlide.style.transition = 'none';
	        curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
	       	curSlide.style.transform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
	        var j = 1;
	        //remains elements
	         for (var i = sliders.length -2; i >= 0; i--) {
	        sliders[i].style.webkitTransform = 'translateX(' + transX/(2*j) + 'px)' + ' rotateZ(' + rotZ/(2*j) + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)'+ ' translateZ(' + (-Z_DIS*j) + 'px)';
	        sliders[i].style.transform = 'translateX(' + transX/(2*j) + 'px)' + ' rotateZ(' + rotZ/(2*j) + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)'+ ' translateZ(' + (-Z_DIS*j) + 'px)';
	        sliders[i].style.transition = 'none';
	        j++;
	        }                    
	          initX =mouseX;
	          e.preventDefault();
	          if (Math.abs(transX) >= curSlide.offsetWidth-30) {      
	            document.removeEventListener('mousemove', slideMouseMove, false);
	            document.removeEventListener('touchmove', slideMouseMove, false);
	            curSlide.style.transition = 'ease 0.2s';
	            curSlide.style.opacity = 0;
	            prevSlide = curSlide;
	            attachEvents(sliders[sliders.length - 2]);
	            slideMouseUp();
	            setTimeout(function () {                            
	              slider.insertBefore(prevSlide, slider.firstChild);                  
	              prevSlide.style.transition = 'none';
	              prevSlide.style.opacity = '1';
	              slideMouseUp();               
	            },201);                                     
	            return;
	          }
	    }
	    function slideMouseUp() {
				transX = 0;
				rotZ = 0;
				transY = 0;     
				curSlide.style.transition = 'cubic-bezier(0,1.95,.49,.73) '+TRANS_DUR+'s';
				curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
				curSlide.style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
				//remains elements
				var j = 1;
				for (var i = sliders.length -  2; i >= 0; i--) {
					sliders[i].style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + TRANS_DUR / (j + 0.9) + 's';
				sliders[i].style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)' + ' translateZ(' + (-Z_DIS*j) + 'px)';
					sliders[i].style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (Y_DIS*j) + 'px)' + ' translateZ(' + (-Z_DIS*j) + 'px)';
				j++;
				}
				document.removeEventListener('mousemove', slideMouseMove, false);
				document.removeEventListener('touchmove', slideMouseMove, false);    
	    }
	}

	// Mailchimp Form
    $('#newsletter-form').ajaxChimp({
        url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
    });

	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault(); // Остановка стандартного действия формы (перезагрузки страницы)
	
		var formData = new FormData(this);
	
		fetch('https://script.google.com/macros/s/AKfycbwGZ2PzLPzRhvTuG6FJDshm8Fc35vgbfPc2btiKoJnG-EwhOKPNF2kQbK5f42rXHZz7/exec', {
			method: 'POST',
			body: formData,
		})
		.then(response => response.json())
		.then(data => {
			if (data.result === 'success') {
				// Очистка формы
				document.getElementById('contact-form').reset();
	
				// Отображение сообщения об успешной регистрации
				document.getElementById('responseMessage').style.display = 'block';
	
				// Скрытие сообщения через несколько секунд (необязательно)
				// setTimeout(() => {
				// 	document.getElementById('responseMessage').style.display = 'none';
				// }, 3000);
			} else {
				alert('Ошибка отправки данных. Попробуйте еще раз.');
			}
		})
		.catch(error => {
			console.error('Ошибка:', error);
		});
	});

})(jQuery);