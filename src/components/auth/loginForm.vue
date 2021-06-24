<template>
    <div class="text-white card card-login card-plain">
        <form class="form" method="POST">
            <div class="card-body">
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-envelope"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Name Or Email">
                </div>

                <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-lock"></i>
                        </span>
                    </div>
                    <input type="password" placeholder="Password" class="form-control" />
                </div>
            </div>
            
            <div class="card-footer text-center">
                <a href="#" class="btn btn-info btn-round btn-lg btn-block">Login</a>
            </div>    
            <div class="pull-left">
                <h6>
                <router-link :to="{name: 'Register'}" class="text-white link">Create Account</router-link>
                </h6>
            </div>
            <div class="pull-right">
                <h6>
                <a href="#" class="text-white link">Forgot Password?</a>
                </h6>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm'
}
</script>

<style scoped>
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ececec;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ececec;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #ececec;
}
</style>