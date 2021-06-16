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


    console.log($(".project-area .grid .test-popup-link"))
    $(".project-area .grid .test-popup-link").magnificPopup({
        type: 'image',
    });
}
)