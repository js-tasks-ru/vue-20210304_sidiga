export default {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props:{
    count:{
      type:Number,
      default:0
    },
  },

  // Компонент должен иметь модель
  model:{
    prop: 'count',
    event:'increment'
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods:{
    incrementMethod(num){
      this.$emit('increment', num+1);
    },

  },

  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="incrementMethod(count)" >Add</button>',
};
