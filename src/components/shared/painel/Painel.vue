<template>
    <div class="painel">
        <div class="painel-header" @click="toggle()">
            {{this.titulo}}
        </div>
        <transition name="painel">
            <div v-show="this.isVisible">
                <div class="painel-body">
                    <slot name="body"/>
                </div>
            </div>
        </transition>
        <transition name="painel-footer">
            <div class="painel-footer">
                <div v-show="this.isVisible">
                    <slot name="footer"/>
                </div>
                <div class="painel-footer-open" 
                     v-show="!this.isVisible" @click="toggle()">
                    +
                </div>
            </div>
        </transition>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                isVisible: true
            }
        },
        props: {
            titulo: {
                type: String,
                required: false
            }
        },
        methods: {
            toggle() {
                this.isVisible = !this.isVisible;
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import './Painel.scss'
</style>
