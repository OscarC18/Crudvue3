import { createApp } from 'vue'
import { createPinia } from 'pinia'
import  VueGoogleMaps  from '@fawmi/vue-google-maps'


import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB2KLEkYPEc3o7IJD1Rrg-x6Dsd-SUNDiQ',
    libraries: "places"
  },
}).mount('#app')



