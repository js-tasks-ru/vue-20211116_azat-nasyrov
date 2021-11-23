import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const RootComponent = defineComponent({
  name: 'Root',

  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter++;
    },
  },
});

const app = createApp(RootComponent);

const vm = app.mount('#app');

// Создайте Vue приложение
