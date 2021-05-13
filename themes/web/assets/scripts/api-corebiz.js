$(document).ready(function () {

    let url = "https://corebiz-test.herokuapp.com/api/v1/products";
    let request = "http://localhost/corebiz/#";
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

                $(".section-products").append(`
                <div>
                    <article class="section-products-item">
                        <img class='section-products-image' src="${product.imageUrl}">
                        <h1>${product.productName}</h1>
                        <p>Por R$ ${product.price.toFixed(2)}</p>
                        ${quantity ? `<p>ou em ${quantity}x de R$ ${value} </p>` : '<p> à  vista</p>'}
                        <button class="btn-buy" buy-product="true">Comprar</button>
                    </article>
                </div>
               `);
            });
        }
    });

    $("body").on("click", "[buy-product]", function (event) {

        buy++;
        let data_product_buy = localStorage.getItem('data_product') !== null ? localStorage.getItem('data_product') : [];
        localStorage.setItem("data_product", JSON.stringify(buy));
    });

});