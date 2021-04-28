export default {
  name: 'MeetupCover',

  props:{
    title:{
      type:String,
    },
    link:{
      type:String
    }
  },

  computed:{
    coverStyle() {
      if (this.link){
        return { '--bg-url': `url(${this.link})` }
      }
    },
  },


  template: `
    <div class="meetup-cover" :style="coverStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};
