<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import gsap from 'gsap';

const isDropdownVisible = ref(false);
const buttonIcon = ref('pi pi-angle-down');
const searchTerm = ref('');
const selectedType = ref('All');

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

// Adiciona um evento de clique no corpo para fechar o dropdown no modo mobile
onMounted(() => {
    document.body.addEventListener('click', handleBodyClick);
});

const handleBodyClick = (event) => {
    // Verifica se o clique ocorreu fora do dropdown
    if (isDropdownVisible.value && !event.target.closest('.dropdown-container')) {
        isDropdownVisible.value = false;
        buttonIcon.value = 'pi pi-angle-down back-rotated';
    }
};

// Remove o evento de clique no corpo ao destruir o componente
onUnmounted(() => {
    document.body.removeEventListener('click', handleBodyClick);
});

const tecnologias = ref([
    {
        photo: "src/assets/tecnologias/vue.png",
        name: "Vue"
    },
    {
        photo: "src/assets/tecnologias/html.png",
        name: "Html"
    },
    {
        photo: "src/assets/tecnologias/css.png",
        name: "Css"
    },
    {
        photo: "src/assets/tecnologias/javascript.png",
        name: "JavaScript"
    },
    {
        photo: "src/assets/tecnologias/bootstrap.png",
        name: "Bootstrap"
    },
    {
        photo: "src/assets/tecnologias/wordpress.png",
        name: "Wordpress"
    }
]);

const selectType = (type) => {
    selectedType.value = type;
    isDropdownVisible.value = false;
    buttonIcon.value = 'pi pi-angle-down back-rotated';
};

const filteredTecnologias = computed(() => {
    const lowerSearchTerm = searchTerm.value.toLowerCase().trim();

    // Filter based on the term and selected type
    const filtered = tecnologias.value.filter(tecnologia => {
        const matchesSearchTerm = tecnologia.name.toLowerCase().includes(lowerSearchTerm);
        const matchesType = selectedType.value === 'All' || tecnologia.type === selectedType.value;
        return matchesSearchTerm && matchesType;
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
        duration: 0.1,
        onComplete: done,
        delay: el.dataset.index * 0.1
    })
}

</script>

<template>
    <div class="col-xl-12 col-md-12 col-sm-12 col-12 mb-3">
        <span class="p-input-icon-right">
            <i class="pi pi-search" />
            <InputText v-model="searchTerm" v-tooltip.top="'O que procura ?'" type="text"
                placeholder="Digite uma tecnologia" />
        </span>
    </div>

    <div class="col-xl-10 col-md-11 col-sm-10 col-11 mt-4 mb-3">
        <h2 class="type">{{ selectedType }}</h2>
    </div>

    <div class="col-xl-2 col-md-1 col-sm-2 col-1 d-flex justify-content-end mb-4">
        <div class="dropdown-container" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <PrimeVueButton label="Filtrar" class="filter" :icon="buttonIcon" iconPos="right" @click="toggleDropdown" />
            <div v-if="isDropdownVisible" class="dropdown-content">
                <ul>
                    <li @click="selectType('All')">All</li>
                    <li @click="selectType('Frameworks')">Frameworks</li>
                    <li @click="selectType('Languages')">Languages</li>
                </ul>
            </div>
        </div>
    </div>

    <TransitionGroup appear tag="div" @before-enter="beforeEnter" @enter="enter"
        v-for="(tecnologia, index) in filteredTecnologias" :key="tecnologia.name"
        class="col-xl-2 col-lg-2 col-md-4 col-6 mb-4">
        <div class="card" v-if="!tecnologia.emptyResult" :data-index="index">
            <img :src="tecnologia.photo" :alt="tecnologia.name">
            <h3>{{ tecnologia.name }}</h3>
        </div>
    </TransitionGroup>
</template>

<style>
.rotated {
    transform: rotate(180deg);
    transition: transform 0.6s ease;
}

.back-rotated {
    transition: transform 0.6s ease;
}
</style>
