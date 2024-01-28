import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AOS from "aos";
import 'aos/dist/aos.css';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/projetos',
      name: 'Projetos',
      component: () => import('../views/ProjetosView.vue'),
    }
  ]
})

router.beforeEach(() => {
  AOS.init();
});

export default router
