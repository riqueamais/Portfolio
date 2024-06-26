<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import gsap from 'gsap';

const isDropdownVisible = ref(false);
const buttonIcon = ref('pi pi-angle-down');
const searchTerm = ref('');
// const selectedType = ref('All');

// const toggleDropdown = () => {
//     // Verifica se a largura da tela é menor ou igual a 991px antes de processar o clique
//     if (window.innerWidth <= 991) {
//         isDropdownVisible.value = !isDropdownVisible.value;
//         buttonIcon.value = isDropdownVisible.value ? 'pi pi-angle-down rotated' : 'pi pi-angle-down back-rotated';
//     }
// };

// const showDropdown = () => {
//     if (window.innerWidth > 991) {
//         isDropdownVisible.value = true;
//         buttonIcon.value = 'pi pi-angle-down rotated';
//     }
// };

// const hideDropdown = () => {
//     if (window.innerWidth > 991) {
//         isDropdownVisible.value = false;
//         buttonIcon.value = 'pi pi-angle-down back-rotated';
//     }
// };

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
        photo: "vue.png",
        name: "Vue",
        type: "Frameworks"
    },
    {
        photo: "angular.webp",
        name: "Angular",
        type: "Frameworks"
    },
    {
        photo: "html.png",
        name: "HTML",
        type: "Languages"
    },
    {
        photo: "css.png",
        name: "CSS",
        type: "Languages"
    },
    {
        photo: "javascript.png",
        name: "JavaScript",
        type: "Languages"
    },
    {
        photo: "typescript.png",
        name: "TypeScript",
        type: "Languages"
    },
    {
        photo: "bootstrap.png",
        name: "Bootstrap",
        type: "Frameworks"
    },
    {
        photo: "tailwindcss.png",
        name: "Tailwind CSS",
        type: "Frameworks"
    },
    {
        photo: "wordpress.png",
        name: "Wordpress",
        type: "System"
    },
    {
        photo: "firebase.png",
        name: "Firebase",
        type: "System"
    },
    {
        photo: "github.png",
        name: "GitHub",
        type: "System"
    },
    {
        photo: "jira.png",
        name: "Jira",
        type: "System"
    },
    {
        photo: "basecamp.png",
        name: "Basecamp",
        type: "System"
    }
]);

// const selectType = (type) => {
//     selectedType.value = type;
//     isDropdownVisible.value = false;
//     buttonIcon.value = 'pi pi-angle-down back-rotated';
// };

const filteredTecnologias = computed(() => {
    const lowerSearchTerm = searchTerm.value.toLowerCase().trim();

    // Filter based on the term and selected type
    const filtered = tecnologias.value.filter(tecnologia => {
        const matchesSearchTerm = tecnologia.name.toLowerCase().includes(lowerSearchTerm);
        // const matchesType = selectedType.value === 'All' || tecnologia.type === selectedType.value;
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
        duration: 0.1,
        onComplete: done,
        delay: el.dataset.index * 0.1
    })
}

const getColorClass = (tecnologiaName) => {
    const colors = {
        vue: 'vue-color',
        html: 'html-color',
        css: 'css-color',
        javascript: 'javascript-color',
        typescript: 'typescript-color',
        bootstrap: 'bootstrap-color',
        tailwindcss: 'tailwindcss-color',
        firebase: 'firebase-color',
        angular: 'angular-color',
        jira: 'jira-color',
        basecamp: 'basecamp-color'
    };

    const tecnologiaKey = tecnologiaName.replace(/\s/g, '').toLowerCase();

    return colors[tecnologiaKey] || 'default-color';
};

</script>

<template>
    <div class="col-xl-12 col-md-12 col-sm-12 col-12 mb-5">
        <span class="p-input-icon-right">
            <i class="pi pi-search" />
            <InputText v-model="searchTerm" v-tooltip.top="'O que procura ?'" type="text"
                placeholder="Digite uma tecnologia" />
        </span>
    </div>

    <!-- <div class="col-xl-12 col-md-12 col-sm-12 col-12 mt-4 mb-3">
        <h2 class="type">{{ selectedType }}</h2>
    </div> -->

    <!-- <div class="col-xl-2 col-md-1 col-sm-2 col-1 d-flex justify-content-end mb-4">
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
    </div> -->

    <TransitionGroup appear tag="div" @before-enter="beforeEnter" @enter="enter"
        v-for="(tecnologia, index) in filteredTecnologias" :key="tecnologia.name"
        class="col-xl-2 col-lg-2 col-md-4 col-6 mb-4">
        <div :class="[getColorClass(tecnologia.name), 'card']" v-if="!tecnologia.emptyResult" :data-index="index">
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

.vue-color:after,
.vue-color:before {
    border: 3px solid var(--cor-verde);
}

.html-color:after,
.html-color:before {
    border: 3px solid #FF5A1F;
}

.css-color:after,
.css-color:before {
    border: 3px solid #0089CA;
}

.javascript-color:after,
.javascript-color:before {
    border: 3px solid #F8DC3E;
}

.typescript-color:after,
.typescript-color:before {
    border: 3px solid #3178C6;
}

.bootstrap-color:after,
.bootstrap-color:before {
    border: 3px solid #7952B3;
}

.tailwindcss-color:after,
.tailwindcss-color:before {
    border: 3px solid #2572B8;
}

.firebase-color:after,
.firebase-color:before {
    border: 3px solid #FDA612;
}

.angular-color:after {
    border: 3px solid #F30B45;
}

.angular-color:before {
    border: 3px solid #A523ED;
}

.jira-color:after,
.jira-color:before {
    border: 3px solid #2185FF;
}

.basecamp-color:after,
.basecamp-color:before {
    border: 3px solid #FDD800;
}

.default-color:after,
.default-color:before {
    border: 3px solid var(--cor-branco);
}
</style>
