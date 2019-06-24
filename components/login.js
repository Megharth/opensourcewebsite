export default {
  name: 'loginComponent',
  data() {
    return {
      dialog: false,
      rememberMe: true
    }
  },
  template: `
    <v-dialog v-model="dialog" max-width="600" attach="#home">
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on" class="text-capitalize subheading">Login</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline indigo darken-1 white--text">Login</v-card-title>
        <v-card-text class="subheading">Please fill out the following fields to Login!</v-card-text>
        <v-container grid-list-md>
          <v-text-field label="Email" required></v-text-field>
          <v-text-field label="Password" hint="example of helper text only on focus"></v-text-field>
          <v-checkbox v-model="rememberMe" label="Remember Me"></v-checkbox>
        </v-container>
          <v-card-text class="subheading">If you forgot your password you can <a href="#">reset it</a>.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue-grey darken-2 white--text text-capitalize subheading" flat @click="dialog = false">Close</v-btn>
          <v-btn class="indigo darken-1 white--text text-capitalize subheading" flat @click="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  `
}
