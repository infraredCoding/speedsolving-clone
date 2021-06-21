<template>
    <div class="card">
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-md-4 row">
                    <a href="#" class="col-4 mt-2">
                        <img class="img img-avatar" src="/static/imgs/avatar.png">
                    </a>
                    <div class="col-8 mt-2">
                        <router-link :to="{ name: 'ForumThread' }">
                            <b class="text-primary">Yo bruv I need Help</b>
                        </router-link>
                        <p>Today At 12:69 . <a href="#">John Doe</a></p>
                    </div>
                </div>
                
                <div class="col-md-2">
                    <p>Replies: <b class="text-primary">100</b></p>
                    
                    <p>Views: <b class="text-primary">1,000</b></p>
                </div>

                <div class="col-md-4 row">
                    <div class="col-8 mt-2">
                        <p><b>Latest Comment:</b> ALright man here is hel...</p>
                    </div>
                    <a href="#" class="col-3 mt-2">
                        <img class="img img-avatar" src="/static/imgs/avatar.png">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThreadCard'
}
</script>

<style scoped>

</style>