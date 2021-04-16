import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el:'#app',

  data(){
    return{
      meetupId:"",
      meetup:"",

    }
  },
  watch:{
    meetupId(){
      this.handleMeetupIdChange();
    }
  },


  methods:{
    handleMeetupIdChange(){
      fetch(`https://course-vue.javascript.ru/api/meetups/${this.meetupId}`)
        .then((res)=>res.json())
        .then(meetup=>{
          this.meetup=meetup
        })
    },

  }


});
