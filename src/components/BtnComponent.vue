<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const myElement = ref(null);

onMounted(() => {
    gsap.from(myElement.value, { opacity: 0, duration: 1, y: 50 });
});
</script>

<template>
    <div class="col-xl-2 col-lg-2 col-sm-4 mt-3">
        <a class="btn"
            href="mailto:henrique.quintino99@gmail.com?subject=Oi Henrique quero transformar minhas ideias em realidade"
            ref="myElement">Contact
            Me</a>
    </div>
</template>

<style>
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 500;
    color: var(--cor-preto);
    background: var(--cor-branco);
    width: 100%;
    height: 31px;
    align-items: center;
    transition: transform 1s cubic-bezier(.5, 2.5, .7, .7);
    box-shadow: none;
}

.btn:hover {
    background-color: var(--cor-branco);
    transform: scale(1.1);
    box-shadow: 4px 4px 4px var(--cor-verde);
    transform: translateY(-4px);
    transition: all 0.5s;
}
</style>