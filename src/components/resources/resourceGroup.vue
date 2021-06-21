<template>
    <div class="container px-5 my-4" style="border: 1px solid #ececec;">
        <div class="card-body">
            <h3 class="card-title text-primary"><b>{{ title }}</b></h3>
            <div class="row justify-content-center">
                <ResourceCard class="col-md-5 mx-3" v-for="(d, j) in data" :key="j" 
                    :title="d.title" 
                    :link="d.link"
                    :desc="d.desc"
                    data-aos="fade-up" data-aos-duration="850"/>
            </div>
        </div>
    </div>
</template>

<script>
import ResourceCard from './resourceCard'

export default {
    name: 'ResourceGroup',
    components: {
        ResourceCard
    },
    props: {
        title: String,
        data: Array
    }
}
</script>

<style scoped>

</style>