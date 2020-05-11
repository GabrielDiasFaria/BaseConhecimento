import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÀRIO!
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkdhYnJpZWwgRGlhcyBGYXJpYSIsImVtYWlsIjoiZ2FicmllbGRpYXNmYXJpYUBnbWFpbC5jb20iLCJhZG1pbiI6MSwiaWF0IjoxNTg4Njc2NzgyLCJleHAiOjE1ODg5MzU5ODJ9.KdP22VD8di3cjyxVp1ijYfUU-4mpF8BBnGtaoCOM-zY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// npm run serve