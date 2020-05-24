import DefaultLayout from '~/layouts/Default.vue'

import {BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandPointLeft} from '@fortawesome/free-regular-svg-icons'
import { faMusic} from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(faHandPointLeft, faMusic);

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.use(BootstrapVueIcons)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
  Vue.component('font-awesome', FontAwesomeIcon)

}
