<template>
    <div class="container justify-content-center px-5 mb-3">
        <IntListItem v-for="(int, i) in interviews" :key="i" :title="int.title" data-aos="fade-up" data-aos-duration="750"/>
    </div>
</template>

<script>
import IntListItem from '../../components/interviews/intListItem'

export default {
    name: 'InterviewList',
    components: {
        IntListItem
    },
    data(){
        return {
            interviews: [
                {
                    'title': 'Interview with Feliks Zemdegs (2018)',
                },

                {
                    'title': 'Interview with Graham Siggins',
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>