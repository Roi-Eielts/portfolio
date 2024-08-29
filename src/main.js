import './assets/main.scss'
import './assets/font.css'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// fontawesome icons
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'

library.add(faGithub, faLinkedin, faDownload, faEnvelope, faStar, faStarHalf)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
