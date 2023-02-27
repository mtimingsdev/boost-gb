export default function simpleAccordion() {
    let allAccordions = $('.simple-accordion > .simple-accordion-content');
    
    if (screen.width <= 801) {
        $('.simple-accordion-button').click(function() {
            let $this = $(this);
            let $target = $this.next();

            if(!$target.hasClass('sa-open')){
                $(".sa-icon").removeClass("flip-icon");
                allAccordions.removeClass('sa-open').slideUp();
                $target.addClass('sa-open').slideDown();
                $this.find(".sa-icon").addClass("flip-icon");
            } else {
                $this.find(".sa-icon").removeClass("flip-icon");
                allAccordions.removeClass('sa-open').slideUp();
            }
        });
    } else {
        $('.simple-accordion-button').attr('disabled', true);
    }
}
