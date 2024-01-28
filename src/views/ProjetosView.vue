<script setup>
import { ref, computed } from 'vue';
import gsap from 'gsap';

const searchTerm = ref('');

const projetos = ref([
    {
        photo: "src/assets/projetos/tech-shop-img.png",
        name: "Tech Shop",
        link: "https://project-tech-shop.vercel.app"
    },
    {
        photo: "src/assets/projetos/facilita-img.png",
        name: "Facilità Eventos",
        link: "https://facilitaeventos.com.br"
    },
    {
        photo: "src/assets/projetos/artigo-img.png",
        name: "Artigo",
        link: "https://project-artigo.vercel.app"
    },
]);

const filteredTecnologias = computed(() => {
    const lowerSearchTerm = searchTerm.value.toLowerCase().trim();

    // Filter based on the term and selected type
    const filtered = projetos.value.filter(projeto => {
        const matchesSearchTerm = projeto.name.toLowerCase().includes(lowerSearchTerm);
        return matchesSearchTerm;
    });

    return filtered;
});

const beforeEnter = (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(100px)'
}

const enter = (el, done) => {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        onComplete: done,
        delay: el.dataset.index * 0.2
    })
}
</script>

<template>
    <section class="projetos">
        <div class="container">
            <div class="row">
                <div data-aos="fade-left" class="col-12 d-flex flex-column mb-5">
                    <h2>Projetos</h2>
                    <p>Aqui estão meus principais projetos.</p>
                    <span class="p-input-icon-right">
                        <i class="pi pi-search" />
                        <InputText v-model="searchTerm" v-tooltip.top="'qual ?'" type="text"
                            placeholder="Pesquise um projeto" />
                    </span>
                </div>

                <TransitionGroup appear tag="div" @before-enter="beforeEnter" @enter="enter"
                    v-for="(projeto, index) in filteredTecnologias" :key="projeto.name"
                    class="col-xl-6 col-lg-6 col-12 mb-5">
                    <div class="card mb-3" v-if="!projeto.emptyResult" :data-index="index">
                        <a :href="projeto.link" target="_blank">
                            <img :src="projeto.photo" :alt="projeto.name">
                        </a>
                    </div>
                    <h3 v-if="!projeto.emptyResult">{{ projeto.name }}</h3>
                </TransitionGroup>
            </div>
        </div>
    </section>
</template>

<style>
section.projetos {
    padding-top: 120px;
}

.projetos .card {
    overflow: hidden;
    width: 100%;
    height: 350px;
    border-radius: 20px;
    background-color: transparent;
}

.projetos .card img {
    display: block;
    width: 100%;
    transition: 2s cubic-bezier(0.67, 0.17, 0, 0.94);
}

.projetos h3 {
    color: var(--cor-branco);
}
</style>