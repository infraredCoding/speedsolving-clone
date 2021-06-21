<template>
    
    <div class="pt-6 page-header clear-filter">
        <div class="" 
            style="background-image:linear-gradient(to bottom, rgba(3, 98, 153, 0.89), rgba(12, 19, 92, 0.89)), url('static/imgs/pexels-igor.jpg');
                height: 90vh;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;">
            <div class="container px-5">
                <div class="content-center">
                    <h3 data-aos="fade-up" data-aos-duration="650">SpeedsolvingClone.com</h3>
                    <h4 data-aos="fade-up" data-aos-duration="750">Speedsolving.com without the functionality and the backdated styles</h4>
                    <router-link data-aos="fade-up" data-aos-duration="900" type="button" class="text-center btn btn-info btn-round btn-lg"
                        :to="{name: 'Register'}">Join The Community</router-link>
                </div>
            </div>
        </div>
    </div>


    <div class="wrapper">
        <h2 class="text-primary text-center">Features</h2>
        <div class="row mx-5 justify-content-center">
            <Card data-aos="fade-up" data-aos-duration="750" title="Forums" goTo="ForumCategories" description="Visit the largest speedsolving forums with an awesome community" btnText="Visit Forums" class="col-md-3 mx-4" />
            <Card data-aos="fade-up" data-aos-duration="900" title="Resources" goTo="Resources" description="take a look at useful speedsolving resources from around the web." btnText="See Resources" class="col-md-3 mx-4" />
            <Card data-aos="fade-up" data-aos-duration="750" title="Community" goTo="Register" description="We have a awesome community of speedsolvers" btnText="Join the Community" class="col-md-3 mx-4" />
        </div>
    </div>

    <!-- <div class="wrapper mt-5 pb-4 bg-primary text-white">
        
    </div> -->

    <div class="wrapper text-white my-5">
        <div
            style="background-image:linear-gradient(to bottom, rgba(3, 98, 153, 0.83), rgba(12, 19, 92, 0.83)), url('static/imgs/pexels-igor.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;">
            <div class="row justify-content-center mx-5">
                <StatCard title="Threads" info="57,822" class="col-md-3 stats" />
                <StatCard title="Messages" info="1,338,104" class="col-md-3 stats" />
                <StatCard title="Members" info="42,362" class="col-md-3 stats" />
                <StatCard title="Latest Member" info="Aerocuber" class="col-md-3" />
            </div>
            <div class="container py-5 text-center">
                <div class="content-center">
                    <h3>Join This Amazing Community</h3>
                    <h4>This site doesnt have functionality so yaeh you cant join lol</h4>
                    <router-link :to="{name: 'Register'}" data-aos="fade-up" data-aos-duration="650" type="button" class="text-center btn btn-info btn-round btn-lg">Sign Up</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Card from '../components/general/cards'
import StatCard from '../components/general/stats-card'


export default {
    name: 'Index',
    components: {
        Card,
        StatCard
    }
}
</script>

<style scoped>

</style>