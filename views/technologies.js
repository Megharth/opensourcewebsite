export default {
  name: 'technologyView',
  data() {
    return {
      technologies: [
        {name: "PHP 7", url: "https://en.wikipedia.org/wiki/PHP"},
        {name: "Yii 2 PHP Framework", url: "https://en.wikipedia.org/wiki/Yii"},
        {name: "JavaScript", url: "https://en.wikipedia.org/wiki/JavaScript"},
        {name: "Vue.js 2 JavaScript Framework", url: "https://en.wikipedia.org/wiki/Vue.js"},
        {name: "HTML 5", url: "https://en.wikipedia.org/wiki/HTML"},
        {name: "CSS 3", url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"},
        {name: "Bootstrap 4", url: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"},
        {name: "AdminLTE Control Panel Template", url: "https://adminlte.io/"},
        {name: "MySQL 5", url: "https://en.wikipedia.org/wiki/MySQL"},
        {name: "Let's Encrypt", url: "https://en.wikipedia.org/wiki/Let%27s_Encrypt"},
        {name: "Font Awesome 5", url: "https://en.wikipedia.org/wiki/Font_Awesome"},
        {name: "Git", url: "https://en.wikipedia.org/wiki/Git"},
        {name: "HTTP/2", url: "https://en.wikipedia.org/wiki/HTTP/2"},
        {name: "Nginx", url: "https://en.wikipedia.org/wiki/Nginx"},
        {name: "Ubuntu", url: "https://en.wikipedia.org/wiki/Ubuntu"},
        {name: "OpenAPI", url: "https://en.wikipedia.org/wiki/OpenAPI_Specification"},
      ],
      webServices: [
        {name: "Github.com", url: "https://en.wikipedia.org/wiki/OpenAPI_Specification"},
        {name: "Moqups.com", url: "https://app.moqups.com/opensourcewebsite/LMtjCISodJ"},
        {name: "Cloudflare.com", url: "https://cloudflare.com/"},
        {name: "DigitalOcean.com", url: "https://m.do.co/c/4d16b1d56809"},
        {name: "SonarCloud.io", url: "https://m.do.co/c/4d16b1d56809"},
        {name: "Travis-Cl.org", url: "https://travis-ci.org/opensourcewebsite-org/opensourcewebsite-org"},
        {name: "CodeClimate.com", url: "https://codeclimate.com/github/opensourcewebsite-org/opensourcewebsite-org"},
        {name: "Semaphore.com", url: "https://codeclimate.com/github/opensourcewebsite-org/opensourcewebsite-org"},
        {name: "Codebeat.com", url: "https://codebeat.co/projects/github-com-opensourcewebsite-org-opensourcewebsite-org-master"},
        {name: "Codacy.com", url: "https://app.codacy.com/project/opensourcewebsite-org/opensourcewebsite-org/dashboard"},
        {name: "Coveralls.io", url: "https://app.codacy.com/project/opensourcewebsite-org/opensourcewebsite-org/dashboard"},
        {name: "Codecov.io", url: "https://codecov.io/gh/opensourcewebsite-org/opensourcewebsite-org"},
      ]
    }
  },
  template: `
  <div>
    <div class="display-1 my-3">Technologies and Web services We <Use></Use></div>
    <v-card class="px-4 py-3 subheading">
      <div class="headline">Technologies</div>
      <ul class="py-2">
        <li v-for="technology in technologies"><a :href="technology.url">{{ technology.name }}</a></li>
      </ul>
      <div class="headline">Web Services</div>
      <ul class="py-2">
        <li v-for="service in webServices"><a :href="service.url">{{ service.name }}</a></li>
      </ul>
    </v-card>
  </div>
  `
}