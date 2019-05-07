<template>
    <ul class="menu">
        <li class="menu-brand">
            Alurapic
        </li>
        <li class="menu-item" v-for="rota of this.rotasMenu" :key="rota.name">
            <router-link :to="{name: rota.name}">{{rota.labelMenu}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            rotas: {
                type: Array,
                required: true
            }
        },
        computed: {
            rotasMenu() {
                return this.rotas.filter(rota => rota.labelMenu !== undefined)
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './Menu.scss'
</style>


