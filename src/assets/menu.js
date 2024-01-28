import { ref } from 'vue';

export const isMenuOpen = ref(false);

export function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}