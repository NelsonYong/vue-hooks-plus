import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './styles.css'
import '@vue-hooks-plus/vitepress-demo-block/dist/style.css'
import DemoBlock from '@vue-hooks-plus/vitepress-demo-block'
import VhpButton from '../../components/button'

import { useRequestDevToolsPlugin } from 'vue-hooks-plus'

import { createPinia } from 'pinia'

const store = createPinia()
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(store)
    app.use(useRequestDevToolsPlugin)
    app.component('demo', DemoBlock)
    app.component('vhp-button', VhpButton)
  },
}