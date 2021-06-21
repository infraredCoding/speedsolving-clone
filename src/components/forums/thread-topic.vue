<template>
    <div class="card">
        <div class="card-body">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <h4 class="card-title mt-4">
                        <router-link :to="{ name: 'ForumTopics' }">Some Topic</router-link>
                    </h4>
                </div>
                <div class="col-lg-2">
                    <h5>Threads</h5>
                    <p class="text-primary"><b>100</b></p>
                </div>
                <div class="col-lg-2">
                    <h5>Messages</h5>
                    <p class="text-primary"><b>1,000</b></p>
                </div>
                <div class="col-md-4 row" style="border: 1px solid #ececec;">
                    <a href="#" class="col-lg-3 col-sm-2 mt-2">
                        <img class="img img-avatar" src="http://tinygraphs.com/squares/helloworld">
                    </a>
                    <div class="col-lg-9 mt-2">
                        <a href="#">Yo Bruv I need help</a>
                        <p>Today At 12:69 . <a href="#">John Doe</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreadTopic'
}
</script>

<style scoped>

</style>