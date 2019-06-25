import App from './App.js';
import HomeView from './views/home.js'
import RoadmapView from './views/road-map.js'
import DonateView from './views/donate.js'
import ContributionView from './views/contribution.js'
import TechnologyView from './views/technologies.js'



const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/road-map',
    component: RoadmapView
  },
  {
    path: '/donate',
    component: DonateView
  },
  {
    path: '/contribution',
    component: ContributionView
  },
  {
    path: '/technologies',
    component: TechnologyView
  }
]

const router = new VueRouter ({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);