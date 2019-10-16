import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Todolists from '@/components/Todolists'
import Addtodolist from '@/components/Addtodolist'
import Profile from '@/components/Profile'
import TodoEdit from '@/components/TodoEdit'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Todolists
    },
    {
      path: '/addtodolist',
      name: 'Addtodolist',
      component: Addtodolist
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/todoEdit/:id',
      name: 'TodoEdit',
      component: TodoEdit
    }
  ]
})
