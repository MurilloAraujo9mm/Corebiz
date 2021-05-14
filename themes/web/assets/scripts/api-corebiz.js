$(document).ready(function () {

    let url = "https://corebiz-test.herokuapp.com/api/v1/products";
    let buy = 0;

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }

    }).done(function (response) {

        if (response) {
            $.each(response, function (index, product) {

                let value = product.installments[0] ? product.installments[0].value : null;
                let quantity = product.installments[0] ? product.installments[0].quantity : null;
                let stars = product.stars ? product.stars : null;
                let promotion = quantity ? `<p>ou em ${quantity}x de R$ ${value} </p>` : '';
                let off = product.productId == 2 || product.productId == 3 ? `<div class="polygon"><p>off</div>` : '';

                $(".section-products").append(`
                    <article class="section-products-item">
                        <img class="section-products-image" src="${product.imageUrl}">
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
        }
    });

    $("body").on("click", "[buy-product]", function (event) {
        buy++;
        let data_product_buy = localStorage.getItem('data_product') !== null ? localStorage.getItem('data_product') : [];
        localStorage.setItem("data_product", JSON.stringify(buy));
    });

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