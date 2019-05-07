import Home from './components/home/Home.vue';

//Ajuste para carregamento Lazy Loading
// import Cadastro from './components/cadastro/Cadastro.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

// Configuração das rotas
// https://router.vuejs.org/guide/#html
export const routes = [
    { 
        path: '', 
        name: 'home',
        component: Home,
        labelMenu: 'Home'
    },
    { 
        path: '/cadastro', 
        name: 'cadastro',
        component: Cadastro,
        labelMenu: 'Cadastro'
    },
    { 
        path: '/cadastro/:id', 
        name: 'alteracao',
        component: Cadastro
    },
    {
        path: '*',
        redirect: { name: 'home' }
    }
]