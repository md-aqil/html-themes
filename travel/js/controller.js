
 var swiper = new Swiper('.swiper-container.swiper-cta', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 300,
      speed: 600,
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
       slidesPerView: 5,
      spaceBetween: 5,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
    });