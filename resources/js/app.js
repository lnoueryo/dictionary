require('./bootstrap');

window.Vue = require('vue');
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// VueRouter
import VueRouter from 'vue-router';
import router from './routes';

// Vuex
import Vuex from 'vuex';
import store from './store';

// Vuetify
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Vuetify Icon
import '@mdi/font/css/materialdesignicons.css'
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('example-component', require('./Index.vue').default);


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
if (process.env.MIX_APP_BASE) {
  axios.defaults.baseURL = process.env.MIX_APP_BASE
}

Vue.component('header-component', require('./components/Header.vue').default)
Vue.mixin({
  mounted() {
    const { title } = this.$options
    if (title) {
      document.title = title
    }
  },
})


const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    vuetify: new Vuetify({
        icons: {
            iconfont: 'mdi',
        }
    })
});