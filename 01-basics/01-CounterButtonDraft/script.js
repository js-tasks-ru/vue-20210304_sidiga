import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el:'#app',

  data(){
    return {
      btnValue:0,
    };
  },

  methods:{
    counterBtn(){
      this.btnValue+=1;
    },
  },

});
