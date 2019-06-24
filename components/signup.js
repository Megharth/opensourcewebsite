export default {
  name: 'signupComponent',
  data() {
    return {
      dialog: false
    }
  },
  template: `
    <v-dialog v-model="dialog" max-width="600" attach="#home">
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on" class="text-capitalize subheading">Signup</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline indigo darken-1 white--text">Signup</v-card-title>
        <v-card-text class="subheading">Please fill out the following fields to singup!</v-card-text>
        <v-container grid-list-md>
          <v-text-field label="Email" required></v-text-field>
          <v-text-field label="Password" hint="example of helper text only on focus"></v-text-field>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue-grey darken-2 white--text text-capitalize subheading" flat @click="dialog = false">Close</v-btn>
          <v-btn class="indigo darken-1 white--text text-capitalize subheading" flat @click="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  `
}
