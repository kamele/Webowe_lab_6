import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
import PersonsTable from '@/components/PersonsTable.vue'
import PersonForm from '@/components/PersonForm.vue'
import BookForm from '@/components/BookForm.vue'
import BooksTable from '@/components/BooksTable.vue'
import BookDelete from '@/components/BookDelete.vue'
import BookUpdate from '@/components/BookUpdate.vue'
//import vSelect from 'vue-select'

//Vue.component('v-select',vSelect);
Vue.use(VueRouter)

const routes = [
  { path: '/persons', component: PersonsTable },
  { path: '/books', component: BooksTable },
  { path: '/personform', component: PersonForm },
  { path: '/bookform', component: BookForm },
  { path: '/bookdelete', component: BookDelete },
  { path: '/bookupdate', component: BookUpdate }
]
const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
