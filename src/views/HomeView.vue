<script setup>
import PingComponent from '@/components/PingComponent.vue';
import BtnComponent from '@/components/BtnComponent.vue';
import TecnologiaComponent from '@/components/TecnologiaComponent.vue'

</script>

<template>
  <section data-aos="fade-right" class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column">
          <h2>Hey, I'm Henrique Quintino - Front-End Developer</h2>
          <p>Transformando ideias em realidade.</p>
          <h3>
            <span>Coding</span>
            <PingComponent />
          </h3>
        </div>
        <BtnComponent />
      </div>
    </div>
  </section>

  <section data-aos="fade-up" class="tecnologias">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Tecnologias que utilizo</h2>
        </div>

        <TecnologiaComponent />

      </div>
    </div>
  </section>
</template>

<style>
/*---------------------------------
      Hero
---------------------------------*/

section.hero {
  padding-top: 120px;
  margin-bottom: 70px;
}

.hero h3 {
  position: relative;
  align-items: center;
  display: flex;
  font-size: 14px;
  color: var(--cor-branco);
  font-weight: 400;
}

.hero span {
  margin-left: 15px;
  cursor: default;
}

/*---------------------------------
      Tecnologias
---------------------------------*/

section.tecnologias {
  margin-bottom: 70px;
}

.tecnologias .card:hover {
  transform: scale(1.1) !important;
  border: 1px solid var(--cor-cinza);
}

.tecnologias .card:hover:after,
.tecnologias .card:hover:before {
  opacity: 1;
}

.tecnologias .card:after {
  animation: clippath 3s linear -1.5s infinite !important;
}

.tecnologias .card:after,
.tecnologias .card:before {
  animation: clippath 3s linear infinite;
  border: 2px solid var(--cor-verde);
  border-radius: 10px;
  bottom: -2px;
  content: "";
  left: -2px;
  opacity: 0;
  position: absolute;
  right: -2px;
  top: -2px;
  transition: all .5s;
  z-index: -1;
}

@keyframes clippath {

  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }

  75% {
    clip-path: inset(0 0 0 98%);
  }

  50% {
    clip-path: inset(98% 0 0 0);
  }

  25% {
    clip-path: inset(0 98% 0 0);
  }
}

.tecnologias .type {
  font-size: 24px;
}

.tecnologias ul {
  color: var(--cor-branco);
  border: 1px solid var(--cor-branco);
  width: 130px;
  border-radius: 6px;
  padding: 5px;
}

.tecnologias .filter {
  background-color: transparent;
  color: var(--cor-branco);
  border: 1px solid var(--cor-branco);
  border-radius: revert-layer;
  height: 35px;
  width: 110px;
}

.tecnologias .dropdown-container:hover .filter {
  background-color: var(--cor-branco);
  color: var(--cor-preto);
}

.tecnologias .dropdown-container {
  position: relative;
  display: inline-block;
}

.tecnologias .dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--cor-preto);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 6px;
  left: -10px;
  top: 36px;
}

.tecnologias .dropdown-container:hover .dropdown-content {
  display: block;
}

.tecnologias .dropdown-content ul li {
  position: relative;
  padding: 12px;
  text-decoration: none;
  display: block;
  transition-timing-function: cubic-bezier(.4, 0, .2, 1);
  transition-duration: 0.4s;
  cursor: pointer;
  border-bottom: 1px solid var(--cor-cinza);
}

.tecnologias .dropdown-content ul li:last-child {
  border-bottom: none;
}

.tecnologias .dropdown-content ul li::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--cor-cinza);
  z-index: -1;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tecnologias .dropdown-content ul li:hover::before {
  opacity: 0.25;
}

.tecnologias .card {
    background: transparent;
    width: 100%;
    align-items: center;
    padding: 10px;
    cursor: default;
    border: 1px solid var(--cor-branco);
    transition: all 0.5s ease-in-out;
}

.tecnologias .card img {
    width: 50px;
    height: 50px;
}
</style>
