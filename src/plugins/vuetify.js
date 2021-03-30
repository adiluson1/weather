import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from '../lang/ru';
import en from '../lang/en';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ru, en },
    current: 'ru',
  },
});
