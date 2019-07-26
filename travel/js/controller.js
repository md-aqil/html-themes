  
// scroll-progress-bar

! function(o) {
    o.fn.prognroll = function(t) {
        var e = o.extend({
            height: 5,
            color: "#50bcb6",
            custom: !1
        }, t);
        return this.each(function() {
            if (o(this).data('prognroll')) {
                return !1
            }
            o(this).data('prognroll', !0);
            var t = o("<span>", {
                class: "bar"
            });

            o("#progress-bar").prepend(t);
            t.css({
                position: "fixed",
                top: 0,
                left: 0,
                width: 0,
                height: e.height,
                backgroundColor: e.color,
                zIndex: 9999999
            });

            e.custom === !1 ? o(window).scroll(function(t) {
                t.preventDefault();
                var e = o(window).scrollTop(),
                    r = o(window).outerHeight(),
                    l = o(document).height(),
                    n = e / (l - r) * 100;
                o(".bar").css("width", n + "%")
            }) : o(this).scroll(function(t) {
                t.preventDefault();
                var e = o(this).scrollTop(),
                    r = o(this).outerHeight(),
                    l = o(this).prop("scrollHeight"),
                    n = e / (l - r) * 100;
                o(".bar").css("width", n + "%")
            });
            o(window).on('hashchange', function(t) {
                t.preventDefault();
                console.log(o(window).scrollTop())
            });
            o(window).trigger('hashchange');
            var r = o(window).scrollTop(),
                l = o(window).outerHeight(),
                n = o("body").outerHeight(),
                c = r / (n - l) * 100;
            o(".bar").css("width", c + "%")
        })
    }
}(jQuery)



 $("#progress-bar").prognroll({

   height:2,        

   color:"#44edbc",
     position:"bottom"

 });

$(function(){

$('#progress-bar').slideUp();

  $(window).scroll(function(){
    var aTop = $('.navbar').height();
    if($(this).scrollTop()>=aTop){
          $('#progress-bar').slideDown();
    }else {
$('#progress-bar').slideUp();

    }
  });
});







   var swiper = new Swiper('.swiper-container.blog', {
    slidesPerView: 4,
    spaceBetween: 30,
  
    freeMode: true,
      
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });




   var swiper = new Swiper('.swiper-container.review', {
    slidesPerView: 3,
    spaceBetween: 30,
    parallax: true,
    freeMode: true,
      
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

     $('.faq-header').click(function () {
          $(this).closest('.faq-box').toggleClass('active').children('.faq-body').slideToggle();
          
        });
        $('.faq-box.active .faq-body').slideDown();
    
     

 var swiper = new Swiper('.swiper-container.swiper-cta', {

      spaceBetween: 30,
      parallax: true,
       grabCursor: true,
          mousewheel: true,

       loop: true,
        keyboard: {
        enabled: true,
      },

      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      }
      ,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });



$('.water-ripple').ripples({
	resolution: 256,
	perturbance: 0.02,
	dropRadius: 20,
});


			wow2 = new WOW(
                {
                boxClass:     'wow-reveal',      // default
                animateClass: 'reveal-text', // default
                offset:       0,          // default
                mobile:       true,       // default
                live:         true        // default
              }
              )
              wow2.init();


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

 var swiper = new Swiper('.swiper-container.slider1', {
      speed: 600,
      parallax: true,
      loop: true,
       slidesPerView: 5,
      spaceBetween: 5,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });
 var swiper = new Swiper('.swiper-container.slider2', {
      speed: 600,
      parallax: true,
      loop: true,
       slidesPerView: 5,
      spaceBetween: 5,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });





new WOW().init();
$('.auto-animate .wow').each(function(a) {
    $(this).attr('data-wow-delay', `${(a / 10) * 1.5}s`);
});

