<script setup>
import MenuComponent from './MenuComponent.vue';
import MenuAbertoComponent from './MenuAbertoComponent.vue';

</script>

<template>
    <header class="transition_on">
        <div class="container">
            <div class="row align-items-center">
                <div data-aos="fade-right" class="col-10">
                    <RouterLink to="/" class="logo">
                        <img src="../assets/logo-white.png" alt="logo-henrique-quintino">
                        <h1>Portfólio</h1>
                    </RouterLink>
                </div>
                <div data-aos="fade-left" class="col-2 desktop">
                    <nav class="d-flex justify-content-end">
                        <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }">Home</RouterLink>
                        <RouterLink to="/projetos" :class="{ 'active-link': $route.path === '/projetos' }">Projetos</RouterLink>
                    </nav>
                </div>
                <MenuComponent />
            </div>
        </div>
        <MenuAbertoComponent />
    </header>
</template>

<style setup>
header {
    display: flex;
    align-items: center;
    background-color: var(--cor-preto);
    border-bottom: 1px solid #2a2929;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}

header .logo {
    display: flex;
    align-items: center;
    color: var(--cor-branco);
    text-decoration: none;
    max-width: 150px;
}

header .logo h1 {
    font-size: 18px;
    margin: 0;
}

header img {
    width: 100%;
    max-width: 80px;
    height: 50px;
    object-fit: cover;
}

header a {
    color: var(--cor-branco);
    font-size: 15px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.37px;
    text-decoration: none;
}

header nav a:last-child {
    margin-left: 24px;
}

header .nav-link {
    color: var(--cor-branco) !important;
    font-size: 15px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0.37px;
    text-decoration: none;
    margin-left: 24px;
}

header a:hover,
header .logo:hover h1 {
    color: var(--cor-verde) !important;
    transition: 0.4s all ease-in-out !important;
}

.mobile {
    display: none;
}

.active-link {
    color: var(--cor-verde);
}

</style>