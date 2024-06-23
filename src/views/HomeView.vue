<script setup>
import PingComponent from '@/components/PingComponent.vue';
import BtnComponent from '@/components/BtnComponent.vue';
import TecnologiaComponent from '@/components/TecnologiaComponent.vue'
import Timeline from 'primevue/timeline';
import { ref, computed } from "vue";

const events = ref([
  {
    status: 'Estagiário de Front-end - Marcasite', date: '9/11/2023 - Atualmente', icon: 'pi pi-briefcase', color: '#9C27B0', image: 'marcasite.png', text: 'Responsável por um papel fundamental na criação e desenvolvimento de Sites e Landing Pages (LPs). Minhas responsabilidades incluem o design e implementação de interfaces atraentes utilizando tecnologias como Vue.js, HTML, CSS, JavaScript, Bootstrap e transformando- os em um site WordPress. Estou comprometido em oferecer soluções digitais inovadoras, combinando minha expertise técnica com uma abordagem criativa.Trabalhar nesta posição me permite aplicar e aprimorar minhas habilidades diariamente, enquanto contribuo para o sucesso e crescimento contínuo da empresa.'
  },
  { status: 'Em Breve', date: '00/00/00000', icon: 'pi pi-cog', color: '#673AB7', image: 'config.png', text: '...' }
]);

// eslint-disable-next-line no-undef
const time = computed(() => {
  const currentHour = new Date().getHours();
  if (currentHour >= 6 && currentHour < 12) {
    return 'Bom dia';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
});
</script>

<template>
  <section data-aos="fade-right" class="hero">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5 d-flex flex-column text-lg-start text-md-start text-sm-start text-center">
          <h2>{{ time }}, meu nome é Henrique Quintino <br> Desenvolvedor Front-end</h2>
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

  <section class="carreira">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Carreira</h2>
        </div>

        <div class="col-12">
          <div class="card">
            <Timeline :value="events" align="alternate" class="customized-timeline">
              <template #marker="slotProps">
                <span class="icone" :style="{ backgroundColor: slotProps.item.color }">
                  <i :class="slotProps.item.icon"></i>
                </span>
              </template>
              <template #content="slotProps">
                <Card class="mt-4">
                  <template #title>
                    {{ slotProps.item.status }}
                  </template>
                  <template #subtitle>
                    {{ slotProps.item.date }}
                  </template>
                  <template #content>
                    <img v-if="slotProps.item.image" :src="`/public/${slotProps.item.image}`" :alt="slotProps.item.name" class="banner shadow-sm" />
                    <p>
                      {{ slotProps.item.text }}
                    </p>
                  </template>
                </Card>
              </template>
            </Timeline>
          </div>
        </div>
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

.hero h2 {
  font-size: 27px;
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

.tecnologias .card {
  background: transparent;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: default;
  border: 1px solid var(--cor-branco);
  transition: all 0.5s ease-in-out;
}

.tecnologias .card img {
  width: 50px;
  height: 50px;
}

.tecnologias .card h3 {
  text-align: center;
  margin-bottom: 0;
  margin-top: 5px;
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

/*---------------------------------
      Carreira
---------------------------------*/

section.carreira {
  margin-bottom: 70px;
}

.carreira .card {
  background-color: transparent;
  border-color: transparent;
  padding: 15px 0;
}

.carreira .card .p-card {
  background-color: #18181b;
}

.carreira .card .icone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--cor-branco);
  font-size: 24px;
  margin: 0 auto;
}

.carreira .card .banner {
  width: 100%;
  height: 80px;
  object-fit: contain;
}

.carreira .card p {
  margin-top: 20px;
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

@media screen and (max-width: 960px) {
  .customized-timeline .p-timeline-event-opposite {
    flex-direction: row;
  }

  .p-timeline-event-content {
    text-align: left;
  }

  .p-timeline-event-opposite {
    display: none;
  }

  .customized-timeline .p-timeline-event:nth-child(2n) {
    flex-direction: row !important;
  }
}

</style>
