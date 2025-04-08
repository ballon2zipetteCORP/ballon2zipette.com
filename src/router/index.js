import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import OurTeamView from '@/views/OurTeamView.vue'
import OurEventsView from '@/views/OurEventsView.vue'
import FlashCompositionVue from '@/views/FlashCompositionVue.vue'
import OrdersView from "@/views/OrdersView.vue";
import GamesView from '@/views/GamesView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: OurTeamView
    },
    {
      path: '/events',
      name: 'events',
      component: OurEventsView
    },
    {
      path: '/flash-composition/:id',
      name: 'flash-composition',
      component: FlashCompositionVue
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path : '/casino',
      name : 'casino',
      component : GamesView
    }
  ],
})
