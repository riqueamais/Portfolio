import { ref } from 'vue';

export const isMenuOpen = ref(false);

export function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

// Estado inicial do tema baseado na preferência do sistema ou do usuário
const isDarkTheme = ref(detectSystemTheme() === 'dark');
export const buttonIcon = ref(isDarkTheme.value ? 'pi pi-sun' : 'pi pi-moon');

export function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
    applyTheme();
    buttonIcon.value = isDarkTheme.value ? 'pi pi-sun' : 'pi pi-moon';
}

function detectSystemTheme() {
    // Verifica a preferência do usuário para o tema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

function applyTheme() {
    const theme = isDarkTheme.value ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', isDarkTheme.value);
    document.body.classList.toggle('light-theme', !isDarkTheme.value);
}

document.addEventListener('DOMContentLoaded', () => {
    // Aplica o tema baseado na detecção do tema do sistema ou preferência do usuário
    const systemTheme = detectSystemTheme();
    isDarkTheme.value = systemTheme === 'dark';
    applyTheme();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    isDarkTheme.value = e.matches;
    applyTheme();
});
