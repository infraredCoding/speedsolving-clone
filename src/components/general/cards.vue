<template>
    <div class="card">
        <!-- <img class="card-img-top" src="" alt="Card image cap"> -->
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">{{ description }}</p>
            <router-link :to="{name: goTo}" class="btn btn-info">{{ btnText }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        description: String,
        btnText: String,
        goTo: String,
    }
}
</script>

<style scoped>

</style>