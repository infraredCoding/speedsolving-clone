<template>
    <div class="card px-3">
        <div class="card-body">
            <h6>{{ title }}</h6>
            <a href="{{ link }}">{{ link }}</a>
            <p>{{ desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResourceCard',
    props: {
        title: String,
        link: String,
        desc: String
    }
}
</script>

<style scoped>

</style>