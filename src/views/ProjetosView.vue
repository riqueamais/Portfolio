<script setup>
import { ref, computed, onMounted } from 'vue';
import { getDatabase, ref as rtdbRef, onValue } from 'firebase/database';
import firebaseApp from '@/firebase';

const numProjetos = ref(4);

const isDropdownVisible = ref(false);
const buttonIcon = ref('pi pi-angle-down');
const searchTerm = ref('');
const selectedType = ref('All');
const projetos = ref([]);
const isLoading = ref(true);

const db = getDatabase(firebaseApp);
const projetosRef = rtdbRef(db, 'projetos');

const fetchProjetos = () => {
    setTimeout(() => {
        onValue(projetosRef, (snapshot) => {
            const projetosData = snapshot.val();
            if (projetosData) {
                projetos.value = Object.values(projetosData);
                isLoading.value = false; // Define isLoading como false após o carregamento dos projetos
            }
        });
    }, 2000); // Aguarda 1 segundo antes de buscar os dados
};

fetchProjetos();

onMounted(() => {
  onValue(projetosRef, (snapshot) => {
    const projetosData = snapshot.val();
    if (projetosData) {
      numProjetos.value = Object.values(projetosData).length; // Atualiza a variável com a quantidade real de projetos
    }
  });
});

const toggleDropdown = () => {
    // Verifica se a largura da tela é menor ou igual a 991px antes de processar o clique
    if (window.innerWidth <= 991) {
        isDropdownVisible.value = !isDropdownVisible.value;
        buttonIcon.value = isDropdownVisible.value ? 'pi pi-angle-down rotated' : 'pi pi-angle-down back-rotated';
    }
};

const showDropdown = () => {
    if (window.innerWidth > 991) {
        isDropdownVisible.value = true;
        buttonIcon.value = 'pi pi-angle-down rotated';
    }
};

const hideDropdown = () => {
    if (window.innerWidth > 991) {
        isDropdownVisible.value = false;
        buttonIcon.value = 'pi pi-angle-down back-rotated';
    }
};

const selectType = (type) => {
    selectedType.value = type;
    isDropdownVisible.value = false;
    buttonIcon.value = 'pi pi-angle-down back-rotated';
};

const filteredprojetos = computed(() => {
    const lowerSearchTerm = searchTerm.value.toLowerCase().trim();

    // Filter based on the term and selected type
    const filtered = projetos.value.filter(projeto => {
        const matchesSearchTerm = projeto.name.toLowerCase().includes(lowerSearchTerm);
        const matchesType = selectedType.value === 'All' || projeto.type === selectedType.value;
        return matchesSearchTerm && matchesType;
    });

    return filtered;
}); 

const getIcons = (tecnologiaIcons) => {
    if (tecnologiaIcons) {
        const icons = tecnologiaIcons.split(',').map(icon => icon.trim().toLowerCase());
        return icons;
    }
    return [];
};
</script>

<template>
    <section data-aos="fade-right" class="projetos-search">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column mb-5">
                    <h2>Projetos</h2>
                    <p>Aqui estão meus principais projetos.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="projetos">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 col-md-11 col-sm-10 col-11 mt-0 mb-4">
                    <h2 class="type">{{ selectedType }}</h2>
                </div>

                <div class="col-xl-2 col-md-1 col-sm-2 col-1 d-flex justify-content-end mb-4">
                    <div class="dropdown-container" @mouseover="showDropdown" @mouseleave="hideDropdown">
                        <PrimeVueButton label="Filtrar" class="filter" :icon="buttonIcon" iconPos="right"
                            @click="toggleDropdown" />
                        <div v-if="isDropdownVisible" class="dropdown-content">
                            <ul>
                                <li @click="selectType('All')">All</li>
                                <li @click="selectType('Sites')">Sites</li>
                                <li @click="selectType('Landing Pages')">LP's</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div v-if="isLoading" class="container">
                    <div class="row">
                        <div v-for="index in numProjetos" :key="index" class="col-xl-6 col-lg-6 col-12 mb-5">
                            <Card class="mb-3 card">
                                <template #header>
                                    <Skeleton class="background" height="320px"></Skeleton>
                                </template>
                                <template #title>
                                    <Skeleton width="210px"></Skeleton>
                                </template>
                                <template #subtitle>
                                    <Skeleton width="120px"></Skeleton>
                                </template>
                                <template #content>
                                    <Skeleton width="100%" class="mb-3"></Skeleton>
                                    <Skeleton width="90%" class="mb-3"></Skeleton>
                                    <Skeleton width="75%" class="mb-3"></Skeleton>
                                    <Skeleton width="170px" class="mb-3"></Skeleton>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="row">
                        <div v-for="item in filteredprojetos" :key="item.name" class="col-xl-6 col-lg-6 col-12 mb-5"
                            data-aos="zoom-in">
                            <Card class="mb-3 card">
                                <template #header>
                                    <div class="background">
                                        <a :href="item.link" target="_blank">
                                            <img :src="item.photo" :alt="item.name" loading="lazy">
                                        </a>
                                    </div>
                                </template>
                                <template #title>
                                    <h3>{{ item.name }}</h3>
                                </template>
                                <template #subtitle>
                                    <div class="d-flex">
                                        <img class="icons" v-for="icon in getIcons(item.icons)" :key="icon"
                                            :src="`${icon}`" :alt="icon">
                                    </div>
                                </template>
                                <template #content>
                                    <p class="m-0">
                                        {{ item.description }}
                                    </p>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
section.projetos-search {
    padding-top: 120px;
}

.projetos .background {
    height: 320px;
    overflow-y: hidden;
}

.projetos .card {
    overflow: hidden;
    width: 100%;
    border-radius: 20px;
    background-color: transparent;
    border-color: #212529;
    height: 564px;
}

.projetos .card img {
    display: block;
    width: 100%;
    transition: 2s cubic-bezier(0.67, 0.17, 0, 0.94);
}

.projetos h3 {
    color: var(--cor-branco);
}

.projetos .card .icons {
    width: 28px;
    height: 28px;
    transition: all 0.3s ease;
}

.projetos .card .icons:hover {
    transform: scale(1.1);
}

.projetos p {
    color: #a1a1aa;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: var(--cor-preto) var(--cor-branco);
    font-size: 14px;
}

.projetos .type {
    font-size: 24px;
    color: var(--cor-branco);
}

.projetos ul {
    color: var(--cor-branco);
    border: 1px solid var(--cor-branco);
    width: 130px;
    border-radius: 6px;
    padding: 5px;
}

.projetos .filter {
    background-color: transparent;
    color: var(--cor-branco);
    border: 1px solid var(--cor-branco);
    border-radius: revert-layer;
    height: 35px;
    width: 110px;
}

.projetos .dropdown-container:hover .filter {
    background-color: var(--cor-branco);
    color: var(--cor-preto);
}

.projetos .dropdown-container {
    position: relative;
    display: inline-block;
    z-index: 999;
}

.projetos .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--cor-preto);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 999;
    border-radius: 6px;
    left: -10px;
    top: 36px;
    height: 158px;
}

.projetos .dropdown-container:hover .dropdown-content {
    display: block;
}

.projetos .dropdown-content ul li {
    position: relative;
    padding: 12px;
    text-decoration: none;
    display: block;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: 0.4s;
    cursor: pointer;
    border-bottom: 1px solid var(--cor-cinza);
}

.projetos .dropdown-content ul li:last-child {
    border-bottom: none;
}

.projetos .dropdown-content ul li::before {
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

.projetos .dropdown-content ul li:hover::before {
    opacity: 0.25;
}
</style>