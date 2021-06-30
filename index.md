<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/dist/css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="/script.js" type="text/script"></script>
    <title>MySite</title>
</head>
<body>
    <header>
        <section class="logo">
            <img style="height: 50px;" src="/img/logo.png"logo">
        </section>

        <section class="container-nav"> 
            <a style="font-weight: bold;" href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact us</a>
        </section>

        <form class="search-form">
            <input class="input" type="text" placeholder="Search..">
            <button class="btn" type="submit">
                <img src="/img/searchicon.png" alt="search">
            </button>
        </form>
    </header>

    <main>
        <section class="container banner">
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt error, mollitia id sint molestias ratione deleniti qui a expedita! Ea, quod? Beatae ea dignissimos at. Fuga quod omnis ullam in.</p>
            <a class="btn" href="#">read more</a>
        </section>

        <section class="container-about">
            <div class="info"> 
                <h2>About us</h2> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis praesentium incidunt distinctio. Delectus rem laborum eaque harum doloremque neque laboriosam necessitatibus earum sed, alias debitis.</p>
            </div>
            <div class="cards">  
                <div class="card">
                    <img class="abous-us__card__img" src="/img/car.png" alt="">
                    <h2 class="card-title">First</h2> 
                    <p class="card-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis</p>
                </div>
                <div class="card">
                    <img src="/img/photoapp.png" alt="">
                    <h2>Second</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis</p>
                </div>
                <div class="card">
                    <img class="abous-us__card__img" src="/img/palm.png" alt="">
                    <h2 class="card-title">Third</h2>
                    <p class="card-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis</p>
                </div>
            </div> 
            <!-- <div class="abous-us__cards">  
                <div class="abous-us__card">
                    <img class="abous-us__card__img" src="/img/грузовик.png" alt="">
                    <h2 class="card-title">First</h2> 
                    <p class="card-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis</p>
                </div>
                <div class="abous-us__card">
                    <img class="abous-us__card__img" src="/img/фотик.png" alt="">
                    <h2 class="card-title">Second</h2>
                    <p class="card-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis</p>
                </div>
                <div class="abous-us__card">
                    <img class="abous-us__card__img" src="/img/пальма.png" alt="">
                    <h2 class="card-title">Third</h2>
                    <p class="card-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur iusto quae ex corporis</p>
                </div>
            </div>  -->
        </section>
    </main>

    <footer>
        <!-- <div style="color: white;" >copyright</div> -->
        <p style="color: white;">copyright</p>
    </footer>
</body>
</html>
