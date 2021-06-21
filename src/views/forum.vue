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
                    <h1>Forums</h1>
                    <h4>Welcome To Our Forums Where You can't Do Anything</h4>
                </div>
            </div>
        </div>
    </div>

    <router-view></router-view>
</template>

<script>
export default {
    name: 'Forum',
}
</script>

<style scoped>

</style>