export default {
  name: 'homeView',
  data() {
    return {
      visionMission: [
        {
          "name": "Electronic Voting",
          "url": "https://en.wikipedia.org/wiki/Electronic_voting"
        },
        {
          "name": "E-democracy",
          "url": "https://en.wikipedia.org/wiki/E-democracy"
        },
        {
          "name": "Collaborative e-democracy",
          "url": "https://en.wikipedia.org/wiki/Collaborative_e-democracy"
        },
        {
          "name": "Participatory democracy",
          "url": "https://en.wikipedia.org/wiki/Participatory_democracy"
        },
        {
          "name": "E-government",
          "url": "https://en.wikipedia.org/wiki/E-government"
        },
        {
          "name": "Open-source governance",
          "url": "https://en.wikipedia.org/wiki/Open-source_governance"
        },
        {
          "name": "Open government",
          "url": "https://en.wikipedia.org/wiki/Open_government"
        },
        {
          "name": "E-participation",
          "url": "https://en.wikipedia.org/wiki/E-participation"
        },
        {
          "name": "Mass collaboration",
          "url": "https://en.wikipedia.org/wiki/Mass_collaboration"
        },
        {
          "name": "Digital collaboration",
          "url": "https://en.wikipedia.org/wiki/Digital_collaboration"
        },
        {
          "name": "Collective intelligence",
          "url": "https://en.wikipedia.org/wiki/Collective_intelligence"
        },
        {
          "name": "Data activism",
          "url": "https://en.wikipedia.org/wiki/Data_activism"
        },{
          "name": "Participatory monitoring",
          "url": "https://en.wikipedia.org/wiki/Participatory_monitoring"
        },
        {
          "name": "Crowdsensing",
          "url": "https://en.wikipedia.org/wiki/Crowdsensing"
        },
        {
          "name": "Internet activism",
          "url": "https://en.wikipedia.org/wiki/Internet_activism"
        },
        {
          "name": "Active citizenship",
          "url": "https://en.wikipedia.org/wiki/Active_citizenship"
        },
        {
          "name": "Radical transparency",
          "url": "https://en.wikipedia.org/wiki/Radical_transparency"
        },
        {
          "name": "Reputation system",
          "url": "https://en.wikipedia.org/wiki/Reputation_system"
        },
        {
          "name": "Public participation",
          "url": "https://en.wikipedia.org/wiki/Public_participation"
        },
        {
          "name": "Wisdom of the crowd",
          "url": "https://en.wikipedia.org/wiki/Wisdom_of_the_crowd"
        },
        {
          "name": "Virtual volunteering",
          "url": "https://en.wikipedia.org/wiki/Virtual_volunteering"
        },
        {
          "name": "Social collaboration",
          "url": "https://en.wikipedia.org/wiki/Social_collaboration"
        },
        {
          "name": "Collaborative innovation network",
          "url": "https://en.wikipedia.org/wiki/Collaborative_innovation_network"
        },
        {
          "name": "Crowdcasting",
          "url": "https://en.wikipedia.org/wiki/Crowdcasting"
        },
        {
          "name": "Open research",
          "url": "https://en.wikipedia.org/wiki/Open_research"
        },
        {
          "name": "Crowdfixing",
          "url": "https://en.wikipedia.org/wiki/Crowdfixing"
        }
      ],
      message: "OpenSourceWebsite (OSW) is an open source website for global online social community. The Website is managed by users. The Website will look like and what functions it will have depends on users' decisions. The Website is updated after each code change. So everyone can influence how the Website works.\n" +
        "\n" +
        "We want the Web to be even better. We want more people using it for more things. We want it to continue to drive creativity, education and economic growth. And we want to empower people to help shape the Web as they move more of their lives online."
    }
  },
  template: `
  <div>
    <v-card class="px-4 py-3 subheading">
      <p>OpenSourceWebsite (OSW) is an open source website for global online social community. The Website is managed by users. The Website will look like and what functions it will have depends on users' decisions. The Website is updated after each code change. So everyone can influence how the Website works.</p>
      <p>We want the Web to be even better. We want more people using it for more things. We want it to continue to drive creativity, education and economic growth. And we want to empower people to help shape the Web as they move more of their lives online.</p>
      <h2 class="title">Our Vision and Mission</h2>
      <ul class="py-3">
        <li v-for="item in visionMission"><a :href="item.url" class="subheading">{{item.name}}</a></li>
      </ul> 
      <h3 class="title">Join to us!</h3> 
    </v-card>
  </div>
  `,
  created() {
    console.log(this.visionMission)
  }
};