<template>
    <div class="container justify-content-center px-5 mb-3" data-aos="fade-up" data-aos-duration="500">
        <h2>Categories</h2>
        <ThreadCategory class="col-12 my-1" />

        <ThreadCategory class="col-12 my-1" />

        <ThreadCategory class="col-12 my-1" />

        <ThreadCategory class="col-12 my-1" />

        <ThreadCategory class="col-12 my-1" />
    </div>
</template>

<script>
import ThreadCategory from '../../components/forums/thread-category'

export default {
    name: 'CategoriesView',
    components: {
        ThreadCategory
    }
}
</script>

<style scoped>

</style>