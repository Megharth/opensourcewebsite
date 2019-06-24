import navbarComponent from './components/navbar.js'
import Home from './views/home.js'
import footerComponent from './components/footer.js'

export default {
  name: 'App',
  components: {
    navbarComponent,
    Home,
    footerComponent
  },
  template: `
    <div>
    <navbarComponent></navbarComponent>
      <v-container fluid>
        <Home id="home"></Home>
      </v-container>
      <footerComponent></footerComponent>
    </div>
  `,
};