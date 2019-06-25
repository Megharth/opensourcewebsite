import App from './App.js';
import HomeView from './views/home.js'
import RoadmapView from './views/road-map.js'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/road-map',
    component: RoadmapView
  }
]

const router = new VueRouter ({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);