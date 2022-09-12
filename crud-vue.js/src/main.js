import Vue from 'vue'
import PageHome from './pages/PageHome.vue'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(PageHome),
}).$mount('#app')
/* import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app') */
