(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Porfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
   
})(jQuery);

(function ($) {
    "use strict";

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the visibility effect
    function handleVisibilityEffect() {
        $(".exp-col").each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }

    // Initial check on page load
    handleVisibilityEffect();

    // Check on scroll
    $(window).on("scroll", function () {
        handleVisibilityEffect();
    });

    // Check on resize (optional, in case your layout changes)
    $(window).on("resize", function () {
        handleVisibilityEffect();
    });

   

})(jQuery);

(function ($) {
    "use strict";

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the visibility effect
    function handleVisibilityEffect() {
        $(".edu-col").each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }

    // Initial check on page load
    handleVisibilityEffect();

    // Check on scroll
    $(window).on("scroll", function () {
        handleVisibilityEffect();
    });

    // Check on resize (optional, in case your layout changes)
    $(window).on("resize", function () {
        handleVisibilityEffect();
    });

    // Other code...

})(jQuery);

(function ($) {
    "use strict";

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the visibility effect
    function handleVisibilityEffect() {
        $(".srv-col").each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }

    // Initial check on page load
    handleVisibilityEffect();

    // Check on scroll
    $(window).on("scroll", function () {
        handleVisibilityEffect();
    });

    // Check on resize (optional, in case your layout changes)
    $(window).on("resize", function () {
        handleVisibilityEffect();
    });

    // Other code...

})(jQuery);

(function ($) {
    "use strict";

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the visibility effect
    function handleVisibilityEffect() {
        $(".portfolio-item").each(function () {
            if (isElementInViewport(this)) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }

    // Initial check on page load
    handleVisibilityEffect();

    // Check on scroll
    $(window).on("scroll", function () {
        handleVisibilityEffect();
    });

    // Check on resize (optional, in case your layout changes)
    $(window).on("resize", function () {
        handleVisibilityEffect();
    });

    // Other code...

})(jQuery);

(function ($) {
    "use strict";

    

    // Form submission handling
    $("form").on("submit", function (event) {
        event.preventDefault();

        // Your form processing logic can go here

        // Display thank you alert
        alert("Thank you! I will contact you soon.");

        // Clear the form (optional)
        $(this).trigger("reset");
    });

    // Other code...

})(jQuery);



