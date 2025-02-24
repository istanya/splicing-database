import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BrowseDB from '~/components/pages/brows_db/BrowseDB.vue';
import Samples from '~/components/pages/samples/Samples.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'BrowseDB', component: BrowseDB },
  { path: '/samples', name: 'Samples', component: Samples },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;