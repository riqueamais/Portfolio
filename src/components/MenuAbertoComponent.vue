<script setup>
import { isMenuOpen, toggleMenu } from '@/assets/menu';

const closeMenu = () => {
    toggleMenu();
};
</script>

<template>
    <div id="opt_menu" class="mobile" :class="{ ativo: isMenuOpen }">
        <ul class="navbar-nav menu-mobile">
            <RouterLink to="/" :class="{ 'active-link': $route.path === '/' }" @click="closeMenu">Home</RouterLink>
            <RouterLink to="/projetos" :class="{ 'active-link': $route.path === '/projetos' }" @click="closeMenu">Projetos</RouterLink>
        </ul>
    </div>
    <div class="fundo_menu" :class="{ ativo: isMenuOpen }"></div>
</template>