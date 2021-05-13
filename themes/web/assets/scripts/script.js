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

        const newlaster_url = `https://corebiz-test.herokuapp.com/api/v1/newsletter`;
        let first_name = $(this).find(".first_name").val();
        let email = $(this).find(".email").val();
        let email_valid_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (first_name == '' && email == '') {
            $(".invalid-input").show().text('Nome e email são obrigatórios');
        } else {
            $(".invalid-input").css("display", "none");
        }

        if (!email_valid_regex.test(email) && email != '') {
            $(".invalid-input").show().text('Informe um email válido');
        }

        if (first_name != '' && email_valid_regex.test(email) && email != '') {
            $.ajax({

                url: newlaster_url,
                contentType: 'application/json',
                cache: false,
                method: 'POST',
                dataType: 'json',
                data: JSON.stringify({
                    email: 'heroku@test.co',
                    name: 'test'
                }),

                success: function (data) {

                    $("body").prepend(` <div class="request-success"><p>${data.message}</p><span class="request-progress"></span> </div>`);

                    $(".request-progress").animate({
                        width: '100%',
                    }, 900, function () {
                        $('.request-success').fadeOut().remove();
                    });
                }
            });
        } 
    });
});