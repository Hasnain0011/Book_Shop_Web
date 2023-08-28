searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}




window.onscroll = () => {
    searchForm.classList.remove('active');

    console.log('scroll');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
    
};

window.onload = () => {
    
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    
    
  };
  

  document.addEventListener('.loader-container', function() {

    var loader = document.getElementById('loader');

    loader.style.display = 'flex';
  });

  document.addEventListener('DOMContentLoaded', function() {

    var loader = document.getElementById('loader');

    loader.style.display = 'flex';
  
    setTimeout(function() {

      loader.style.display = 'none';

    }, 5000); 
  });
  


var swiper = new Swiper(".books-slider", {

    loop:true,
    centeredSliders:true,
    autoplay: {
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSliders:true,
    autoplay: {
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });






  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSliders:true,
    autoplay: {
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    
    centeredSliders:true,
    autoplay: {
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    loop:true,
    grabCursor:true,
    centeredSliders:true,
    autoplay: {
        delay:4500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });





  