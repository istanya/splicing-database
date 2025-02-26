import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import About from '~/components/pages/about/About.vue';
import BrowseDB from '~/components/pages/brows_db/BrowseDB.vue';
import HowToUse from '~/components/pages/how_to_use/HowToUse.vue';
import Samples from '~/components/pages/samples/Samples.vue';

const routes: RouteRecordRaw[] = [
    { path: '/splicing_database/', name: 'About', component: About },
    { path: '/splicing_database/browse_db', name: 'BrowseDB', component: BrowseDB },
    { path: '/splicing_database/how_to_use', name: 'HowToUse', component: HowToUse },
    { path: '/splicing_database/samples', name: 'Samples', component: Samples },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;