$(function () {

    if ($(".j_slide").length) {

        let timeSlide = 3000;
        let slideNav = '';

        function jSlide() {

            $(".j_slide_nav span").removeClass("active");

            if ($(".j_slide_item:visible").next(".j_slide_item").length) {
                $(".j_slide_nav span:eq(" + ($(".j_slide_item:visible").index() + 1) + ")").addClass("active");
                $(".j_slide_item:visible").fadeOut(function () {
                    $(this).next(".j_slide_item").fadeIn();
                });
            } else {
                $(".j_slide_nav span:eq(0)").addClass("active");

                $(".j_slide_item:visible").fadeOut(function () {
                    $(".j_slide_item:eq(0)").fadeIn();
                });
            }
        }

       
        let jSlideTimer = setInterval(function () {
            jSlide();
        }, timeSlide);

        $(".j_slide").mouseenter(function () {
            clearInterval(jSlideTimer);
        }).mouseleave(function () {
            jSlideTimer = setInterval(function () {
                jSlide();
            }, timeSlide);
        });

        $(".j_slide_item").each(function () {
            slideNav += "<span class='rounded transition'></span>";
        });

        $(".j_slide_nav").html(slideNav).find("span").click(function () {

            let navigation = $(this);

            clearInterval(jSlideTimer);

            $(".j_slide_nav span").removeClass("active");
            $(".j_slide_item:visible").fadeOut(function () {
                navigation.addClass("active");
                $(".j_slide_item:eq(" + navigation.index() + ")").fadeIn();
            });
        });
        
        $(".j_slide_nav").find("span:eq(0)").addClass("active");
    }

    // Form newlaster send

    $(".new-laster-form").submit(function (e) {

        e.preventDefault();
        
        let first_name = $(this).find(".first_name").val();
        let email = $(this).find(".email").val();
        let email_valid_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (first_name == '') {
            $(".invalid-input").show().text('Por favor, informe seu nome');
        } else {
            $(".invalid-input").css("display", "none");
        }

        if (!email_valid_regex.test(email) && email != '') {
            $(".invalid-input").show().text('Por favor, informe um email válido');
        } else {
            $(".invalid-input").hidden();
        }
    });
});