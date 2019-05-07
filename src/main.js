import Vue from 'vue'
import App from './App.vue'
import Config from '../Config';

// Importando o arquivo de localização do vee-validate direto
// da pasta node_modules
import pt_BR_messages from 'vee-validate/dist/locale/pt_BR';

Vue.config.productionTip = false

// Aqui está sendo importado o VeeValidate e registrado no Vue e
// já configurando a localização para pt_BR
// https://baianat.github.io/vee-validate/guide/getting-started.html#usage
// https://baianat.github.io/vee-validate/guide/localization.html#localization-api
import VeeValidate, { Validator } from 'vee-validate';
Vue.use(VeeValidate);
Validator.localize('pt_BR', pt_BR_messages);

// Instalação do VueResource que dentre outras coisas
// permite realizar as chamadas Http para Api's
// https://www.npmjs.com/package/vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Instalação e configuraçao das rotasp
// https://router.vuejs.org/installation.html#direct-download-cdn
import { routes } from './routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Criando o sistema de rotas baseado no arquivo de rotas importado
// Usando o HTML5 history mode.
// https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
const router = new VueRouter({
  mode: 'history', 
  routes
});

// Faz a configuração em função do ambiente de execução
// development, test or production
const configData = new Config().configure()

// Aqui está sendo definido a URL base para todas as requisições HTTP
// https://github.com/pagekit/vue-resource/blob/develop/docs/config.md
Vue.http.options.root = configData.BASE_URL;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
