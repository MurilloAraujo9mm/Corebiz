<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="themes/web/assets/css/reset.css">
    <link rel="stylesheet" href="themes/web/assets/css/boot.css">
    <link rel="stylesheet" href="themes/web/assets/css/style.css">
    <link rel="stylesheet" href="themes/web/assets/icons/styles.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="icon" href="https://www.corebiz.ag/wp-content/uploads/2020/06/cropped-logo-corebiz-favicon-1-32x32.png" sizes="32x32" />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;1,200;1,300;1,700;1,800&display=swap" rel="stylesheet">
    <title>CoreBiz projeect</title>
</head>

<body>
    
    <header class="main-header">
        <div class="container">
            <div class="main-header-content">
                <div class="logo-tipo-header">
                    <img src="themes/web/assets/images/corebiz-white.jpg">
                </div>
                <div class="search-form-header">
                    <form action="" method="POST">
                        <input type="text" placeholder="O que está procurando?">
                        <button class="icon-notext icon-search search-form-button"></button>
                    </form>
                </div>
                <div class="icon-user my-account-header">
                    <div class="my-account-header-user">
                        <a href="#">Minha conta</a>
                        <div class="cart-add-itens"></div>
                    </div>
                </div>
                <div class="account-cart-header">
                    <span class="account-cart-content">
                        <a class="icon-cart-plus" href="#">
                            <span class="account-cart-number">1</span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section class="seeking-what-section">
            <div class="main_content_slide j_slide">
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-01.jpg" alt="" title="" /></a>
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-02.jpg" alt="" title="" /></a>
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-03.jpg" alt="" title="" /></a>
                <div class="j_slide_nav"></div>
            </div>
        </section>
        <section class="container">
            <div class="section-products">
                <header class="section-products-header">
                    <h1>Mais vendidos</h1>
                    <span class="decorated-border-white"></span>
                </header>
                <div class="section-products-content">

                </div>
            </div>
        </section>
        <section class="new-laster-section">
            <div class="new-laster-section-content">
                <header class="new-laster-header">
                    <h1>Participe de nossas news com promoções e novidades</h1>
                </header>
                <p class="invalid-input"></p>
                <form class="new-laster-form" action="" method="POST">
                    <input class="first_name" type="text" placeholder="Digite seu nome:" name="first_name" />
                    <input class="email" type="text" placeholder="Digite seu email:" name="email" />
                    <button class="request-api">Eu quero!</button>
                </form>
            </div>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <section class="container">
            <div class="main-itens-footer">
                <header>
                    <h1>localização</h1>
                    <span class="decorated-border-black"></span>
                </header>
                <div class="main-itens-list-footer">
                    <ul class="main-itens-ul-footer">
                        <li class="main-itens-li-footer"><a href="#">Avenida Andrômeda, 2000, Bloco 6 e 8</a></li>
                        <li class="main-itens-li-footer"><a href="#">Alphavile SP</a></li>
                        <li class="main-itens-li-footer"><a href="#">brasil@corebiz.ag</a></li>
                        <li class="main-itens-li-footer"><a href="#">+55 11 3090 1039</a></li>
                    </ul>
                </div>
                <div class="main-itens-contact-footer">
                    <div class="icon-headphones my-account-header">
                        <a href="#">Entre em contato contato</a>
                    </div>
                    <div class="icon-envelope-o my-account-header">
                        <a href="#">Fale com o nosso consultor online</a>
                    </div>
                </div>
        </section>
    </footer>
    <script src="themes/web/assets/scripts/jquery-3.6.0.js"></script>
    <script src="themes/web/assets/scripts/script.js"></script>
    <script src="themes/web/assets/scripts/api-corebiz.js"></script>
</body>

</html>