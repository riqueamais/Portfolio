<script setup>
import PingComponent from '@/components/PingComponent.vue';
import BtnComponent from '@/components/BtnComponent.vue';
import TecnologiaComponent from '@/components/TecnologiaComponent.vue'
</script>

<template>
  <section data-aos="fade-right" class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5 d-flex flex-column">
          <h2>Hey, I'm Henrique Quintino <br> Front-end Developer</h2>
          <p>Transformando ideias em realidade.</p>
          <h3>
            <span>Coding</span>
            <PingComponent />
          </h3>
          <BtnComponent />
        </div>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" class="tecnologias">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Skills</h2>
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
  margin-bottom: 35px;
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
