import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUpView from '@/views/SignUpView'
import LogInView from '@/views/LogInView'
import MovieView from '@/views/MovieView'
import MovieDetailView from '@/views/MovieDetailView'
import FundingView from '@/views/FundingView'
import FundingDetailView from '@/views/FundingDetailView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'SignUpView',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'LogInView',
    component: LogInView
  },

  {
    path: '/',
    name: 'MovieView',
    component: MovieView
  },

  {
    path: '/:id',
    name: 'MovieDetailView',
    component: MovieDetailView,
  },
  {
    path: '/fundings',
    name: 'FundingView',
    component: FundingView
  },
  {
    path: '/fundings/:id',
    name: 'FundingDetailView',
    component: FundingDetailView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router