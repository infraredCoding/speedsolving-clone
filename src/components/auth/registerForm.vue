<template>
    <div class="text-white card card-login card-plain">
        <form class="form" method="GET">
            <div class="card-body">
                <label><b>Username</b></label>
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-user"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username">
                </div>

                <label><b>Email</b></label>
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-envelope"></i>
                        </span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email">
                </div>

                <label><b>Password</b></label>
                <div class="input-group no-border input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-lock"></i>
                        </span>
                    </div>
                    <input type="password" placeholder="Password" class="form-control" />
                </div>

                <label><b>Date Of Birth</b></label>
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-calendar-alt"></i>
                        </span>
                    </div>
                    <input type="date" class="form-control">
                </div>

                <label><b>Location</b></label>
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-compass"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Location">
                </div>

                <label><b>Introduction</b></label>
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-th-list"></i>
                        </span>
                    </div>
                    <textarea type="text" class="form-control" placeholder="Introduction"></textarea>
                </div>

                <label><b>Verification</b></label>
                <div class="input-group no-border text-white input-lg">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class=" text-white fa fa-user-check"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control" placeholder="What is the shape of a rubik's cube?">
                </div>
            </div>

            <div class="card-footer text-center">
                <a href="#" class="btn btn-info btn-round btn-lg btn-block">Register</a>
            </div>    
            <div class="pull-left">
                <h6>
                <router-link :to="{name: 'Login'}" class="text-white link">Have An Account? Login</router-link>
                </h6>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'RegisterForm'
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