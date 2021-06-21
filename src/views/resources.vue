<template>
    <div class="wrapper text-white my-5">
        <div
            style="background-image:linear-gradient(to bottom, rgba(3, 98, 153, 0.83), rgba(12, 19, 92, 0.83)), url('/static/imgs/pexels-igor.jpg');
                height: 50vh;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;">
            <div class="container py-5 text-center">
                <div class="content-center pt-5">
                    <h1>Resources</h1>
                    <h4>Hardcoded resources page for actual cubing resources</h4>
                </div>
            </div>
        </div>
    </div>

    <ResourceGroup v-for="(r, i) in rsg" :key="i" :title="r.name" :data="r.data" data-aos="fade-up" data-aos-duration="750"/>
    
</template>

<script>
import ResourceGroup from '../components/resources/resourceGroup'

export default {
    name: 'Resources',
    components: {
        ResourceGroup
    },
    data(){
        return{
            rsg: [
                {
                    'name': 'Integrated Tools/Resources for Cubers',
                    'data': [
                        {
                            'title': 'Speedsolving Wiki',
                            'link': 'https://www.speedsolving.com/wiki',
                            'desc': 'Community built wiki of methods, cubers, events, algorithms, and more.'
                        },
                        {
                            'title': 'Speedsolving Forum',
                            'link': 'https://www.speedsolving.com/',
                            'desc': 'Community of 35,000+ members and 1.25 million posts about speedsolving, started 2006.'
                        },
                        {
                            'title': 'Most Useful Threads on Speedsolving.com',
                            'link': 'https://www.speedsolving.com/threads/best-most-useful-threads-on-speedsolving-com.70376/',
                            'desc': 'Compilation of the most useful discussions on the forum.'
                        }
                    ]
                },
                {
                    'name': 'Algorithms',
                    'data': [
                        {
                            'title': 'Algorithm Database',
                            'link': 'http://algdb.net/',
                            'desc': 'Large database of various algorithms including OLL, PLL, F2L, ZBLL, and more.'
                        },
                        {
                            'title': 'Cyotheking Cubing Algs',
                            'link': 'http://www.cyotheking.com/best-cubing-algs/',
                            'desc': ''
                        },
                        {
                            'title': 'CubeSkills 3x3 Algs',
                            'link': 'https://www.cubeskills.com/categories/3x3-algs',
                            'desc': ''
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>