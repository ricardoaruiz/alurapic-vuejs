<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    
    <!-- Mostrando o funcionamento do v-if/v-else -->
    <h2 class="centralizado" v-if="!id">Incluindo</h2>
    <h2 class="centralizado" v-else>Alterando</h2>

    <h2 class="centralizado">{{foto.titulo}}</h2>

    <form @submit.prevent="enviar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" name="titulo" autocomplete="off" v-model.lazy="foto.titulo" data-vv-as="Título da foto" v-validate="'required'">
        <small class="error-msg">{{errors.first('titulo')}}</small>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" name="url" autocomplete="off" v-model.lazy="foto.url" data-vv-as="URL da foto" v-validate="'required'">
        <small class="error-msg">{{errors.first('url')}}</small>
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" v-model="foto.descricao"></textarea>
      </div>

      <Imagem class="image-box" v-show="foto.url" :url="foto.url"/>

      <div class="centralizado">
        <Botao rotulo="GRAVAR" tipo="submit" class="espaco-btn"/>
        <Botao rotulo="VOLTAR" tipo="button" @onClick="voltar()" />
      </div>

    </form>
  </div>
</template>

<script>

import Imagem from '../shared/imagem/Imagem.vue'
import Botao from '../shared/botao/Botao.vue';
import Foto from '../../domain/Foto';
import FotoService from '../../services/FotoService';

export default {
  components: {
    Imagem, 
    Botao
  },
  beforeCreate() {
      this.fotoService = new FotoService(this.$resource);
  },
  created() {
    if (this.id) {
      this.fotoService.buscarFoto(this.id)
        .then( foto => this.foto = foto )
        .catch( error => console.error(error.message) );
    }
  },
  data() {
      return {
          foto: new Foto(),
          id: this.$route.params.id
      }
  },
  methods: {
      voltar() {
        this.$router.push({ name : 'home'});
      },
      enviar() {
        this.$validator.validateAll()
          .then(isFormValid => {
            if (isFormValid) {
              if (!this.foto._id) {
                this.salvar()
              } else {
                this.alterar();
              }
            }
          });
      },
      salvar() {
        this.fotoService.salvar(this.foto)
          .then( () => {
              console.log('Foto criada com sucesso');
              this.foto = new Foto();
          })
          .catch( error => {
              console.error(error.message);
          });
      },
      alterar() {
        this.fotoService.alterar(this.foto)
          .then( () => {
            console.log('Foto alterarada com sucesso');
            this.$router.push({ name: 'home'});
          })
          .catch( error => console.log(error.message));
      }
  }
}

</script>
<style lang="sass" scoped>
  @import './Cadastro.scss'
</style>