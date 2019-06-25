import App from './App.js';
import HomeView from './views/home.js'
import RoadmapView from './views/road-map.js'
import DonateView from './views/donate.js'
import ContributionView from './views/contribution.js'
import TechnologyView from './views/technologies.js'
import TermsView from './views/terms-of-use.js'
import PolicyView from './views/privacy-policy.js'

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
  },
  {
    path: '/terms',
    component: TermsView
  },
  {
    path: '/policy',
    component: PolicyView
  }
]

const router = new VueRouter ({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount(`#app`);