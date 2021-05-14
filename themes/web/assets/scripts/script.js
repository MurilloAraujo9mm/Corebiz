$(function () {

    if ($(".j_slide").length) {

        let timeSlide = 3000;
        let slideNav = '';

        const coreBizSlide = () => {

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
            coreBizSlide();
        }, timeSlide);

        $(".j_slide").mouseenter(function () {
            clearInterval(jSlideTimer);
        }).mouseleave(function () {
            jSlideTimer = setInterval(function () {
                coreBizSlide();
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

    // Menu Mobile 
    $(".main-menu-mobile-header").click(function () {
        if ($('.main-menu-mobile-content').css("margin-left") == "-250px") {
            $('.main-menu-mobile-content').animate({
                marginLeft: "0px"
            }, 250);
        }
    });

    $(".menu-mobile-close").click(function () {
        if ($('.main-menu-mobile-content').css("margin-left") == "0px") {
            $('.main-menu-mobile-content').animate({
                marginLeft: "-250px"
            }, 250);
        }
    });

    // Form newlaster send

    $(".new-laster-form").submit(function (event) {

        event.preventDefault();

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
                    email: email,
                    name: first_name
                }),
                success: function (data) {
                    triggerNotifyApiMessage(data);
                },

                complete: function () {
                    console.log("request success")
                }
            });
        }
    });

    const triggerNotifyApiMessage = (data) => {

        let set_param_box = {
            title: data.message,
            icon: "icon-bell-o",
            color: "green",
            timer: 3000
        };

        let triggerContent = `
            <div class="trigger_notify trigger_notify_${set_param_box.color}" style="left: 100%; opacity: 0;">
            <p class="${set_param_box.icon}"> ${ set_param_box.title} </p>
            <span class='trigger_notify_timer'></span>
            </div>
        `;

        if (!$('.trigger_notify_box').length) {
            $('body').prepend("<div class='trigger_notify_box'></div>");
        }

        $('.trigger_notify_box').prepend(triggerContent);
        $('.trigger_notify').stop().animate({
            'left': '0',
            'opacity': '1'

        }, 200, function () {
            $(this).find('.trigger_notify_timer').animate({
                'width': '100%'
            }, set_param_box.timer, 'linear', function () {
                $(this).parent('.trigger_notify').animate({
                    'left': '100%',
                    'opacity': '0'
                }, function () {
                    $(this).remove();
                });
            });
        });

        $('body').on('click', '.trigger_notify', function () {
            $(this).animate({
                'left': '100%',
                'opacity': '0'
            }, function () {
                $(this).remove();
            });
        });
    }

    /** Carroseul */

    let width = (parseInt($('.section-products-item .item').outerWidth()) + parseInt($(".section-products-item .item").css("margin-right"))) * $(".section-products-item .item").length;

    $(".section-products").css("width", width);

    let number_images = 3;
    let padding_and_margin = 16.5;
    let next_or_prev = 0;
    let count_itens = ($(".section-products-item .item").length / number_images) - 1;

    let slide_go = (number_images * padding_and_margin) + ($('.section-products-item img').outerWidth()) * number_images;

    $(".next").click(function () {

        if (next_or_prev < count_itens) {
            next_or_prev++;
            $(".carrosel").animate({
                marginLeft: '-=' + slide_go + 'px'
            }, '500')
        }
    });

    $(".prev").click(function () {

        if (next_or_prev >= 1) {
            next_or_prev--;
            $(".carrosel").animate({
                marginLeft: '+=' + slide_go + 'px'
            }, '500')
        }
    });


    const slideProduct = () => {
        
    }

});