<template>
    <div>
        <h1 class="titulo">Fotos</h1>
        <ListaFotos :fotos="fotos" @removerFoto="removerFoto($event)" @alterarFoto="alterarFoto($event)" />
    </div>
</template>

<script>
    import FotoService from '../../services/FotoService';
    import ListaFotos from '../shared/lista-fotos/ListaFotos.vue';

    export default {
        components: {
            ListaFotos
        },
        data() {
            return {
                fotos: []
            }
        },
        beforeCreate() {
            this.fotoService = new FotoService(this.$resource);            
        },
        mounted() {
            this.fotoService.buscarFotos()
                .then(fotos => {
                    this.fotos = fotos;
                })
                .catch(error => {
                    // eslint-disable-next-line
                    console.log('Erro no componente', error);
                });
        },
        methods: {
            removerFoto(foto) {                
                this.fotoService.remover(foto._id)
                    .then( _ => {
                        this.fotos = this.fotos.filter(f => f._id !== foto._id);
                    })
                    .catch( error => {
                        console.error(error.message);
                    })
            },
            alterarFoto(foto) {
                this.$router.push({ name: 'alteracao', params: {id : foto._id}})
            }
        }
    }
</script>

<style>
    .titulo {
        text-align: center
    }
</style>
