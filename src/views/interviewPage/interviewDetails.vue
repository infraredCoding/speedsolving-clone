<template>
    <div class="container px-5 mb-3">
        <InterViewCard data-aos="fade-up" data-aos-duration="750"/>

        <ThreadCmnt data-aos="fade-up" data-aos-duration="750" />

        <ThreadCmnt data-aos="fade-up" data-aos-duration="750" />

        <ThreadCmnt data-aos="fade-up" data-aos-duration="750" />

        <ThreadCmnt data-aos="fade-up" data-aos-duration="750" />
    </div>
</template>

<script>
import InterViewCard from '../../components/interviews/interview'
import ThreadCmnt from '../../components/forums/comment'

export default {
    name: 'IntDetails',
    components: {
        InterViewCard,
        ThreadCmnt
    }
}
</script>

<style scoped>

</style>