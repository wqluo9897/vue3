<script setup> 
    import children1 from './chidren1.vue'
</script>
<template>
    <div>
        <h1>Parent1</h1>
        <slot/>
        <br/>
        <children1/>
        <hr>
    </div>
</template>

<style scoped>

</style>