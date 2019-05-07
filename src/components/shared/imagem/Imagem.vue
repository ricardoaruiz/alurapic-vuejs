<template>
    <img class="image-responsiva" :src="this.url" />    
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
    /* Estilo da imagem */
    .image-responsiva {
        width: 100%;
    }
</style>

