import { ref } from 'vue';

export const isMenuOpen = ref(false);

export function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

const isDarkTheme = ref(false);
export const buttonIcon = ref('pi pi-moon');

export function toggleTheme() {
    applyTheme(isDarkTheme.value ? 'dark' : 'light');
    buttonIcon.value = isDarkTheme.value ? 'pi pi-moon' : 'pi pi-sun';
    isDarkTheme.value = !isDarkTheme.value;
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        document.getElementById('favicon').href = 'favicon.ico';
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.getElementById('favicon').href = 'favicon-dark.ico';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var systemTheme = detectSystemTheme();
    applyTheme(systemTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    var newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
});