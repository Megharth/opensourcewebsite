export default {
  name: 'footerComponent',
  template: `
  <v-footer class="pa-3" height="45">
    <blockquote class="blockquote">
      <router-link to="/road-map">Road Map</router-link> | 
      <router-link to="/donate">Donate</router-link> | 
      <router-link to="/contribution">Contribution</router-link> | 
      <router-link to="/technologies">Technologies</router-link> | 
      <a href="https://github.com/opensourcewebsite-org/opensourcewebsite-org">We're on Github</a> | 
      <a href="https://gitter.im/opensourcewebsite-org/community">Join us on Gitter</a> | 
      <a href="https://join.slack.com/t/opensourcewebsite/shared_invite/enQtNDE0MDc2OTcxMDExLWJiMzlkYmUwY2QxZTZhZGZiMzdiNmFmOGJhNDkxOTM4MDg1MDE4YmFhMWMyZWVjZjhlZmFhNjlhY2MzMDMxMTE">Join us on Slack</a> | 
      <router-link>Terms of Use</router-link> | 
      <router-link>Privacy Policy</router-link>
    </blockquote>
  </v-footer>
  `
}