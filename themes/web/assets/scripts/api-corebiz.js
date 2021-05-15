$(document).ready(function () {

    let url = "https://corebiz-test.herokuapp.com/api/v1/products";
    let buy = 0;

    $.ajax({
        type: "GET",
        url: url,
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
                let promotion = quantity ? `<p>ou em ${quantity}x de R$ ${value} </p>` : '';
                let off = product.productId == 2 || product.productId == 3 ? `<div class="polygon"><p>off</div>` : '';

                $(".carousel").prepend(`
                <article class="section-products-item">
                    <a class="item" href="#"><img class="section-products-image" src="${product.imageUrl}" alt="${product.productName}" title="${product.productName}"></a>
                    <header>
                    <h1>${product.productName}</h1>
                    </header>
                    <p>${set_start_item(product)}</p>
                    <p>Por R$ ${product.price.toFixed(2)}</p> ${promotion}
                    <button class="btn-buy" buy-product="true">Comprar</button>
                    <span>${off}</span>
                </article>
            `);
            });
            carrouselOfProducts();
        }
    });

    const numberFormat = (number, decimal_places = 2) => {

        let f = null;
        let decimal

        if (number.substr(2).length <= 2) {
            f = `${parseFloat(number.substr(0,2))}.${number.substr(2)}`;
        } else if (number.substr(2).length <= 2) {
            f = `${parseFloat(number.substr(0,3))}.${number.substr(3)}`;
        } else {
            f = `${parseFloat(number.substr(0,3))}.${number.substr(3)}`;
        }

        return f;
    }


    /** Function Carrosel products */

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

    $("body").on("click", "[buy-product]", function (event) {
        buy++;
        let data_product_buy = localStorage.getItem('data_product') !== null ? localStorage.getItem('data_product') : [];
        localStorage.setItem("data_product", JSON.stringify(buy));
    });

    /** arrow stars on products */
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
});