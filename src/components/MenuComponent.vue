<script setup>
import { isMenuOpen, toggleMenu } from '@/assets/menu';
</script>

<template>
    <div data-aos="fade-left" class="col-3 mobile">
        <div class="hamburguer-bt mobile" :class="{ ativo: isMenuOpen }" @click="toggleMenu">
            <div class="hamburguer_line hamburguer-top"></div>
            <div class="hamburguer_line hamburguer-middle"></div>
            <div class="hamburguer_line hamburguer-bottom"></div>
        </div>
    </div>
</template>