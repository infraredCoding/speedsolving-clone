<template>
    <div class="container px-5 mb-3">
        <h2>Topic Name</h2>
        <ThreadCard class="my-1"  data-aos="fade-up" data-aos-duration="750"/>

        <ThreadCard class="my-1"  data-aos="fade-up" data-aos-duration="850"/>

        <ThreadCard class="my-1"  data-aos="fade-up" data-aos-duration="850"/>

        <ThreadCard class="my-1"  data-aos="fade-up" data-aos-duration="850"/>

        <ThreadCard class="my-1"  data-aos="fade-up" data-aos-duration="850"/>

        <nav class="py-5">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                <span class="page-link">Previous</span>
                </li>
                <li class="page-item active">
                    <span class="page-link">
                        1
                        <span class="sr-only">(current)</span>
                    </span>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import ThreadCard from '../../components/forums/thread-card'

export default {
    name: 'TopicsView',
    components: {
        ThreadCard
    }
}
</script>

<style scoped>

</style>