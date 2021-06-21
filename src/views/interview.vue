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
                    <h1>Interviews</h1>
                    <h4>Here we show you just one fake interview many times</h4>
                </div>
            </div>
        </div>
    </div>

    <router-view></router-view>

    <nav class="py-4">
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
    
</template>

<script>
export default {
    name: 'Interview',
}
</script>

<style scoped>

</style>