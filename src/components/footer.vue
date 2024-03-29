<script setup>
    const object = defineProps({
        user:Number,
        url: {
            type: String,
            required: true,
            default: 'https://www.example.com'
        }
    })
    console.log(object);
</script>
<template>
    <div>
        <h1>Footer</h1>{{ object.user }}
    </div>
</template>

<style scoped>

</style>