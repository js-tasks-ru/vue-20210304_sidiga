export default {
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
  },

  computed: {
    localeDate() {
      if (!this.date) {
        return null;
      } else {
        return new Date(this.date).toLocaleString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }
    },

    getISOStringDate(){
      if (!this.date){
        return null;
      } else {
        return new Date(this.date).toISOString().substr(0, 10);
      }
    },

  },

  template: `
    <ul class="info-list">
    <li>
      <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
      {{ organizer }}
    </li>
    <li>
      <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
      {{ place }}
    </li>
    <li>
      <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
      <time :datetime="getISOStringDate">{{ localeDate }}</time>
    </li>
    </ul>`,
};
