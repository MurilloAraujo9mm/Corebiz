$(function () {

    /** MAIN  SLIDE HEADER */
    if ($(".j_slide").length) {

        const timeSlide = 3000;
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

    /** MENU MOBILE  SLIDE HEADER */
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

    /*
     * REQUEST FOR APIS
     * API NEWLASTER AND API PRODUCTS
     */

    $(".new-laster-form").submit(function (event) {

        event.preventDefault();

        let first_name = $(this).find(".first_name").val();
        let email = $(this).find(".email").val();
        const email_valid_regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (first_name == '' || email == '') {
            triggerNotifyApiMessage({
                message: "nome e email são obrigatórios",
                icon: "icon-frown-o",
                color: "yellow"
            });
            return;
        }

        if (!email_valid_regex.test(email)) {
            triggerNotifyApiMessage({
                message: "informe um email válido",
                icon: "icon-frown-o",
                color: "red"
            });
            return;
        }

        /* API NEWLASTER */
        $.ajax({
            url: `https://corebiz-test.herokuapp.com/api/v1/newsletter`,
            contentType: 'application/json',
            cache: false,
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                email: email,
                name: first_name
            }),
            success: function (data) {
                triggerNotifyApiMessage({
                    message: data.message,
                    icon: "icon-smile-o",
                    color: "green",
                });
            },

            complete: function () {
                console.log("request success")
            }
        });

    });

    /* API PRODUCTS */

    $.ajax({
        type: "GET",
        url: `https://corebiz-test.herokuapp.com/api/v1/products`,
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=ut8");
        }

    }).done(function (response) {

        if (response) {
            $.each(response, function (index, product) {

                let value = product.installments[0] ? product.installments[0].value : null;
                let quantity = product.installments[0] ? product.installments[0].quantity : null;
                let stars = product.stars ? product.stars : null;
                let promotion = quantity ? `<p>ou em ${quantity}x de R$ ${numberFormat(value.toString())} </p>` : '';
                let off = product.productId == 2 || product.productId == 3 ? `<div class="polygon"><p>off</div>` : '';
                let price = product.price.toString();

                $(".carousel").prepend(`
                <article class="section-products-item">
                    <a class="item" href="#"><img class="section-products-image" src="${product.imageUrl}" alt="${product.productName}" title="${product.productName}"></a>
                    <header>
                    <h1>${product.productName}</h1>
                    </header>
                    <p>${set_start_item(product)}</p>
                    <p>Por R$ ${numberFormat(price)}</p> ${promotion}
                    <button class="btn-buy" buy-product="true">Comprar</button>
                    <span>${off}</span>
                </article>
            `);
            });
            carrouselOfProducts();
        }
    });

    /*
     * HELPERS FUNCTIONS
     */
    
    const triggerNotifyApiMessage = (data) => {

        let set_param_box = {
            title: data.message,
            icon: data.icon,
            color: data.color,
            timer: 3000,
            break: data.break
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


    /* FUNCTION CARROSEL PRODUCTS */
    const carrouselOfProducts = () => {
        let width = (parseInt($('.carousel .item').outerWidth()) + parseInt($(".carousel .item").css("margin-right"))) * $(".carousel .item").length;
        $(".carousel").css("width", width);

        let number_images = window.innerWidth < 494 ? 1 : 3;
        let padding_and_margin = window.innerWidth < 494 ? 250 : 100;
        let next_or_prev = 0;
        let count = ($(".carousel .item").length / number_images) - 1;

        let slide = (number_images * padding_and_margin) + ($('.carousel img').outerWidth()) * number_images;

        $(".next").click(function () {
            if (next_or_prev < count) {
                next_or_prev++;
                $(".carousel").animate({
                    marginLeft: '-=' + slide + 'px'
                }, '500')
            }
        });

        $(".prev").click(function () {
            if (next_or_prev >= 1) {
                next_or_prev--;
                $(".carousel").animate({
                    marginLeft: '+=' + slide + 'px'
                }, '500')
            }
        });
    }

    /* FUNCTION LOCALSTORAGE ADD ITEM PRODUCTS */
    let buy = 0;
    let product_buy = JSON.parse(localStorage.getItem('product_buy'));
    let product = localStorage.getItem('product_buy') !== null ? product_buy : "1"

    $(".account-cart-number").text(product);
    $("body").on("click", "[buy-product]", function () {        
        buy++;
        localStorage.setItem('product_buy', JSON.stringify(buy));
        $(".account-cart-number").text(buy);

        triggerNotifyApiMessage({
            message: `${buy} itens adicionados`,
            icon: "icon-smile-o",
            color: "blue",
        });
    });

    /* FUNCTION SET STARS PRODUCTS */
    const set_start_item = (product_stars) => {

        let content_start = "";
        let increment = 1;
        let stars_sum = 0;

        while (increment <= product_stars.stars) {
            content_start += '<img class="product-stars" src="themes/web/assets/images/estrela.png">';
            stars_sum += 1;
            increment++;
        }

        for (let index = stars_sum; index < 5; index++) {
            content_start += '<img class="product-stars" src="themes/web/assets/images/estrela-transplarente.png">';
        }
        return content_start;
    }

    const numberFormat = (number) => {
        return number.substr(2).length <= 2 ? `${number.substr(0,2)}.${number.substr(2)}` : `${number.substr(0,3)}.${number.substr(3)}`;
    }
});

