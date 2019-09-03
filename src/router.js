import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/views/main-view'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: MainView,
			children: [{
				path: "/personfile",
				name: "profile",
				component: () =>
					import( /* webpackChunkName: "profile" */ "@/views/profile.vue")
			}, {
				path: "/information",
				name: 'info',
				component: () =>
					import( /* webpackChunkName: "info" */ "@/views/info.vue")
			}]
		}
	]
})