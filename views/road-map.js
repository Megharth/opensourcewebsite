export default {
  name: 'roadmapView',
  data() {
    return {
      data: [
        {
          heading: 'Economics',
          title: "Money Transfer and International transfer",
          content: "You can transfer money among customers with different currencies, also as loans. The users can easily exchange sums of money with a warranty of refund in case of any kind of problem, such as the difference between the different currencies among different countries. There is also a transfer system for family and friends, so you can easily send and receive money with and from them."
        },
        {
          title: "Crowdfunding",
          content: "Some people need help! Politics, start-up, victims of natural disasters? Found a project by raising money together with other contributors in order to help the people in need. You can change, for real, the future."
        },
        {
          title: "Work and personnel search",
          content: "In need of a work? Check the offers, make a proposal, and apply for the job that you think you are qualified for. Working transforms us in the person that we want to be."
        },
        {
          title: "Freelancer market",
          content: "A very big market also for little works, literally any kind of work! The customers can view the profile of each worker and choose the one that is suitable with them. After checking the profile, the customers can hire the worker in order to develop the service that it has been offered, and after, if the work is well done, pay the worker for its service."
        },
        {
          title: "Collaborative consumption",
          content: "Share the economy, interact with other customers and obtain or provide valuable resources or services that can be useful for your activities."
        },
        {
          title: "Estate agents",
          content: "Trade, sell, rent apartments and houses. Look at the map, ask for photos and information and sign your new contract."
        },
        {
          title: "Advertising platform",
          content: "Insert your information and request, and check the compatibility with the proposal of goods and services available. Collect all the information that you need in order to correctly select someone who fits your needs."
        },
        {
          title: "Currencies monitoring",
          content: "Take a look at the best currencies trends right now, whether if is in your place or abroad."
        },
        {
          heading: "Personal interests and hobbies",
          title: "Dates and Love",
          content: "Meet people or just flirt at distance, meet your lifetime partner or just have a one-night fun. Create your personal profile according to your need and launch yourself in a new exciting adventure."
        },
        {
          title: "Genealogy and genealogical tree",
          content: "Meet your genes, follow your roots. If you want to know more about your ancestors, about your family, the latest science and our quality service offer results you can really trust."
        },
        {
          title: "Food delivery",
          content: "Are you hungry? No problem, we are here to feed you! Look at the map, choose the restaurant you like the most and check if they are available to deliver your favorite food direct to your belly, while you are comfortably at home!"
        },
        {
          title: "Hotel, Hospitality and B&B",
          content: "It does not mean if you travel for work or just because you want to,but it is important to find the right place to have a nice sleep after a long day."
        },
        {
          title: "Medicine and Health",
          content: "Ask and learn how other people manage their healthcare, share your experience to help the next person and take part in a research to better understand everyone’s health. With us, you can have your own medical card, health monitoring parameters and medicines in one only place."
        },
        {
          title: "Sport and Fitness",
          content: "For a correct lifestyle, food and healthcare are not enough. Sport is one of the most important things to stay healthy. You can discuss on everything concerning sport in our forum, create a thread or join in in already existent one."
        },
        {
          title: "Inventory and reviews of books and films",
          content: "If you do not know what to watch or what to read right now or if you do not remember what you have already watched or read, just create a simple but complete inventory that can be useful to you the next time, when you just do not want to lose too much time in deciding what to choose!"
        },
        {
          heading: "Technical",
          title: "Database and Storage",
          content: "Sometimes it is important to organize information in databases, lists or inventories. Keep your mind up-to-date with virtual clouds infrastructure and with software platforms designed to simply and effectively help you in keeping track of your inventory, either on your desktop or mobile phone."
        },
        {
          title: "OAuth",
          content: "Use an open protocol to allow secure authorization in a simple and standard method from web, desktop or mobile applications. OAuth is very simple to use and interact with protected data, and actually you can also use the simplified version OAuth 2.0"
        },
        {
          title: "API documentation service",
          content: "Create applications and gain the access to the data. Work together to quickly design document and test APIs, set your team and obtain visibility and consistency."
        },
        {
          title: "Sport and Fitness",
          content: "For a correct lifestyle, food and healthcare are not enough. Sport is one of the most important things to stay healthy. You can discuss on everything concerning sport in our forum, create a thread or join in in already existent one."
        },
        {
          heading: "For the users",
          title: "Blogs",
          content: "Users can freely use blogs to communicate, discuss, stay informed about the various topics of the website."
        },
        {
          title: "Public and private Forums",
          content: "Join public or private forums in order to get and stay in touch with other passionates just like you. Create threads, answer to questions and compare your knowledge with the knowledge of others. But remember, the first condition of a correct dialogue and discussion, is the reciprocal respect of the differents ideas."
        },
      ]
    }
  },
  template: `
    <div>
      <div class="display-1 my-3">Road Map</div>
      <v-card class="px-4 py-3 subheading">
        <p>OpenSourceWebsite (OSW) means that the users are the protagonists of the entire Website. The Website is totally free, and it gives to everyone the possibility to influence in a lot of different ways its development. Through the use of e-Vote system, each user has the possibility to vote electronically for the features of the Website, with high levels of anonymity, safety and the congruity of personal preferences.</p>
        <div v-for="data in data">
          <div class="headline py-2" v-if="data.heading">{{ data.heading }}</div>
          <div class="title py-1">{{ data.title}}</div>
          <p>{{ data.content}}</p>
        </div>
      </v-card>
    </div>
  `
}