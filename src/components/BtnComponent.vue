<script setup></script>

<template>
    <a class="btn mt-2"
        href="mailto:henrique.quintino99@gmail.com?subject=Oi Henrique quero transformar minhas ideias em realidade"
        target="_blank">Contato</a>
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
    width: 195px;
    height: 31px;
    align-items: center;
    transition: all 0.5s ease-in-out;
    box-shadow: none;
}

.btn:hover {
    background-color: var(--cor-branco);
    transform: scale(1.1);
    box-shadow: 4px 4px 10px var(--cor-verde);
    transform: translateY(-4px);
    transition: all 0.5s;
}
</style>