import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WaitingUnit from '../views/WaitingUnit.vue'
import OperatingUnit from '../views/OperatingUnit.vue'
import AllUnit from '../views/AllUnit.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home | SS6 Transformore'
    }
  },
  {
    path: '/waiting-operator',
    name: 'waitingoperator',
    component: WaitingUnit,
    meta: {
      title: 'Unit Waiting Operator | SS6 Transformore'
    }
  },
  {
    path: '/operating-unit',
    name: 'operatingunit',
    component: OperatingUnit,
    meta: {
      title: 'Unit Operating | SS6 Transformore'
    }
  },
  {
    path: '/all-unit',
    name: 'allunit',
    component: AllUnit,
    meta: {
      title: 'All Unit | SS6 Transformore'
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// custom page title 
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home'
  next();
})
export default router
