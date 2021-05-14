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
    <title>CoreBiz Project | Front-end Developer</title>
</head>

<body>
    <header class="main-header">
        <div class="main-header-content">
            <div class="logo-type-header">
                <img src="themes/web/assets/images/Corebiz-.png">
            </div>
            <div class="search-form-content-header">
                <form class="search-form-header" method="POST">
                    <input type="text" placeholder="O que está procurando?">
                    <button class="icon-notext icon-search search-form-button"></button>
                </form>
            </div>
            <div class="my-account-header-user">
                <a class="icon-user" href="#">Minha conta</a>
                <div class="account-cart-header">
                    <span class="icon-cart-plus account-cart-content">
                        <span class="account-cart-number">1</span>
                    </span>
                </div>
            </div>
            <div class="icon-notext icon-align-justify main-menu-mobile-header"></div>
        </div>
    </header>
    <div class="main-menu-mobile-content">
        <ul class="main-menu-mobile-list">
            <li> <a class="icon-user" href="#">Login</a></li>
            <li> <a class="icon-screen" href="#">Minha conta</a></li>
        </ul>
        <div class="icon-times menu-mobile-close"></div>
    </div>
    <main>
        <section class="seeking-what-section">
            <div class="main_content_slide j_slide">
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-01.jpg" alt="" title="" /></a>
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-02.jpg" alt="" title="" /></a>
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-03.jpg" alt="" title="" /></a>
                <a class="j_slide_item" href="#" title=""><img src="themes/web/assets/images/featured-03.jpg" alt="" title="" /></a>
                <div class="j_slide_nav"></div>
            </div>
        </section>
        <section class="container">
            <header class="section-products-header">
                <h1>Mais vendidos</h1>
                <span class="decorated-border-white"></span>
            </header>
            <div class="section-products"></div>
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
                <header class="main-itens-header-footer">
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
                <ul class="main-itens-contact-footer">
                    <li><span class="icon-mail"></span><a href="#">Entre em contato</a></li>
                    <li><span class="icon-headphones"></span><a href="#">Fale com o nosso consultor online</a></li>
                </ul>
                <ul class="main-itens-logo">
                    <li><a href="#"><img src="themes/web/assets/images/corebiz -black.jpg"></li>
                    <li><a href="#"><img src="themes/web/assets/images/corebiz -black.jpg"></a></li>
                </ul>
        </section>
    </footer>
    <script src="themes/web/assets/scripts/jquery-3.6.0.js"></script>
    <script src="themes/web/assets/scripts/script.js"></script>
    <script src="themes/web/assets/scripts/api-corebiz.js"></script>
</body>

</html>