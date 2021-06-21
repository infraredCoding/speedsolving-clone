<template>
    <div style="border: 1px solid #ececec;">
        <div class="card-body">
            <h3 class="card-title text-primary"><b>Announcements</b></h3>
            <ThreadTopic/>
            <ThreadTopic/>
        </div>
    </div>
</template>

<script>
import ThreadTopic from './thread-topic'

export default {
    name: 'ThreadCategory',
    components: {
        ThreadTopic
    }
}
</script>

<style scoped>

</style>