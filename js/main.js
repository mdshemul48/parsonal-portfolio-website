$(document).ready(() => {
    let $buttons = $(".project-area .button-group button");


    $buttons.click((event) => {
        $(".project-area .button-group button").removeClass("active");
        console.log($(".project-area .button-group button"))
        event.target.classList.add("active")

        let selector = $(event.target).attr("data-filter");
        $(".project-area .grid").isotope({
            filter: selector
        })
    }
    )
    return false;
}
)