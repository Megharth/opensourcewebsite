import modalComponent from './modal.js'

export default {
  name: 'navbarComponent',
  components: {
    modalComponent
  },
  template: `
  <v-toolbar height="50" flat color="primary" id="toolbar">
    <v-toolbar-title class="title">OpenSourceWebsite</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <modalComponent isSignup></modalComponent>
      <modalComponent></modalComponent>
    </v-toolbar-items>
  </v-toolbar>
  `
}
