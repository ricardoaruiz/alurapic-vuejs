<template>
    <button class="btn" 
            :type="this.tipoBotao"
            :class="this.estiloBotao" 
            :disabled="!this.habilitado"
            @click="onClick()" >
        {{this.rotulo}}
    </button>    
</template>

<script>
    export default {
        props: {
            tipo: {
                type: String,
                required: false
            },
            rotulo: {
                type: String,
                required: true
            },
            estilo: {
                type: String,
                required: false
            },
            habilitado: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        computed: {
            tipoBotao() {
                return this.tipo
                    ? this.tipo
                    : 'submit'

            },
            estiloBotao() {
                return this.estilo
                    ? 'btn-' + this.estilo
                    : 'btn-normal';
            }
        },
        methods: {
            onClick() {
                this.$emit('onClick')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './Botao.scss'
</style>
