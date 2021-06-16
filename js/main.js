$(document).ready(() => {
    let $buttons = $(".project-area .button-group button");


    $buttons.click((event) => {
        $(".project-area .button-group button").removeClass("active");
        event.target.classList.add("active")

        let selector = $(event.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector
        })
        return false;
    })
    $(".project-area .button-group #button1").trigger("click")


    $(".project-area .grid .test-popup-link").magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    // owl-carousel
    $(".site-main .client-about-area .owl-carousel").owlCarousel(
        {
            loop: true, autoplay: true, dots: true, responsive: {
                0: {
                    items: 1
                },
                544: {
                    items: 2
                }

            }
        }
    )

    let nav_offset_top = $(".header_area").height() + 50;
    const navbarFixed = () => {
        if ($(".header_area").length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop()
                if (scroll >= nav_offset_top) {
                    $(".header_area .main-menu").addClass("never_fixed")
                } else {
                    $(".header_area .main-menu").removeClass("never_fixed")
                }
            }
            )
        }
    }
    navbarFixed()
}
)