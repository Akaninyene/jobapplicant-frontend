import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignupPage from '@/views/SignupPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import ApplicationPage from '@/views/ApplicationPage.vue'
import AboutusPage from '@/views/AboutusPage.vue'
import ContactusPage from '@/views/ContactusPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    { path: '/', name: 'Home', component: HomePage, },
    { path: '/aboutus', name: 'Aboutus', component: AboutusPage, },
    { path: '/contactus', name: 'Contactus', component: ContactusPage, },
    { path: '/signup', name: 'Signup', component: SignupPage, },
    { path: '/login', name: 'Login', component: LoginPage, },
    { path: '/application', name: 'Application', component: ApplicationPage, },

       
      ],
})

export default router
