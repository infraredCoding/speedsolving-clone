<template>
    <div class="">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <h2 class="card-text">{{ info }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StatCard',
    props: {
        title: String,
        info: String,
    }
}
</script>

<style scoped>

</style>