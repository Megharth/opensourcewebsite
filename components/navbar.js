import signupComponent from './signup.js'
import loginComponent from './login.js'

export default {
  name: 'navbarComponent',
  components: {
    signupComponent,
    loginComponent
  },
  template: `
  <v-toolbar height="50" flat color="primary" id="toolbar">
    <v-toolbar-title class="title">OpenSourceWebsite</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <signupComponent></signupComponent>
      <loginComponent></loginComponent>
    </v-toolbar-items>
  </v-toolbar>
  `
}
