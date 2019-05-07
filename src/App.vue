<template>
  <div class="conteudo">

    <!-- Menu da aplicação     -->
    <meu-menu :rotas="this.routes"></meu-menu>

    <!-- Paginas da aplicação -->
    <transition name="paginas">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {
  name: 'app',
  components: {
    'meu-menu' : Menu
  },
  data() {
    return {
      routes
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  .conteudo {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    width: 95%;
  }
  .paginas-enter, .paginas-leave-active {
      opacity: 0;
  }
  .paginas-enter-active, .paginas-leave-active {
      transition: opacity .4s;
  }    
</style>
