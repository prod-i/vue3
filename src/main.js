import { createApp } from 'vue'
import components from '@/components/UI'
import router from '@/router/router'
import App from './App'
import Vintersection from '@/directives/VIntersection';
import directives from '@/directives';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});
directives.forEach(directive => {
    app.directive(directive.name, directive)
})
app
    .use(router)
    .mount('#app')
