<template>
    <div class="card">
        <div class="card-body">
            <div class="row justify-content-between">
                <div class="col-md-4 mt-4">
                    <b class="card-title">
                        <router-link :to="{ name: 'InterviweDetails' }">{{ title }}</router-link>
                    </b><br>
                    <span>
                        <a href="#" class="text-muted">idk</a>
                        13 Jun, '69
                    </span>
                </div>
                <div class="col-md-2">
                    <p>Replies</p>
                    <p class="text-primary"><b>420</b></p>
                </div>
                <div class="col-md-2">
                    <p>Views</p>
                    <p class="text-primary"><b>6,900</b></p>
                </div>
                <div class="col-md-3 row justify-content-around">
                    <div class="col-9 mt-2">
                        <p>Today At 12:69<br>
                        <a href="#" class="text-muted">John Doe</a></p>
                    </div>
                    <a href="#" class="col-3 mt-2">
                        <img class="img img-avatar" src="http://tinygraphs.com/squares/helloworld">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntListItem',
    props: {
        title: String
    }
}
</script>