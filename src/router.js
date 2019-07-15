import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import About from './views/About.vue'
import Policy from './views/Policy.vue'
import Service from './views/Service.vue'
import Questions from './views/Questions.vue'
import Search from './views/Search.vue'
import Login from './views/Login.vue'
import Buy from './views/Buy.vue'
import Download from './views/Download.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/policy',
			name: 'Policy',
			component: Policy
		},
		{
			path: '/service',
			name: 'Service',
			component: Service
		},
		{
			path: '/questions',
			name: 'Questions',
			component: Questions
		},
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/buy',
			name: 'Buy',
			component: Buy
		},
		{
			path: '/download',
			name: 'Download',
			component: Download
		},
		{
			path: '/buy/detail',
			name: 'Detail',
			component: Detail
		},
	]
})
