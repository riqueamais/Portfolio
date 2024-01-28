<template>
    <span class="ping"></span>
</template>

<style>
.ping {
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: 40px;
    top: 3px;
    left: -15px;
    background-color: var(--cor-verde);
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 1px 1px 2px #888;
}

.ping::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 1px solid var(--cor-verde);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
}

@keyframes ring {
    0% {
        width: 10px;
        height: 10px;
        opacity: 1;
    }

    100% {
        width: 15px;
        height: 15px;
        opacity: 0;
    }
}
</style>