<template>
    <div>
        <div class="filtro-pesquisa">
            <input  type="text" 
                    id="filtro" 
                    placeholder="Pesquise as fotos aqui"
                    v-model="filtro">
                    
            <div class="filtro-pesquisa-acoes">
                <Botao rotulo="Limpar" 
                       @onClick="limparFiltro()" 
                       :habilitado="this.filtro.length > 0" />
            </div>
        </div>
        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto of this.fotosFiltradas" :key="foto.id">

                <Painel :titulo="foto.titulo">
                    <div slot="body">
                        <Imagem class="image-box" :url="foto.url" />
                    </div>
                    <div slot="footer">
                        <Botao rotulo="Alterar" 
                               estilo="normal" 
                               @onClick="alterarFoto(foto)"
                               class="botao-acoes" />

                        <Botao rotulo="Apagar" 
                               estilo="perigo" 
                               @onClick="removerFoto(foto)" />
                    </div>
                </Painel>

            </li>
        </ul>
    </div>
</template>

<script>
    import Painel from '../painel/Painel.vue';
    import Imagem from '../imagem/Imagem.vue'
    import Botao from '../botao/Botao.vue';

    export default {
        data() {
            return {
                filtro: ''
            }
        },
        components: {
            Painel,
            Imagem,
            Botao
        },
        props: {
            fotos: {
                type: Array,
                required: true
            }
        },
        computed: {
            fotosFiltradas() {
                if(this.filtro) {
                    return this.fotos.filter(foto => {
                        return new RegExp(this.filtro, 'i').test(foto.titulo);
                    });
                }
                return this.fotos;
            }
        },
        methods: {
            limparFiltro() {
                this.filtro = '';
            },
            removerFoto(foto) {
                this.$emit('removerFoto', foto);
            },
            alterarFoto(foto) {
                this.$emit('alterarFoto', foto);
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './ListaFotos.scss'
</style>
