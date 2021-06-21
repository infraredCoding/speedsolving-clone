<template>
    <div class="page-header-image pt-5" 
        style="background-image:linear-gradient(to bottom, rgba(3, 98, 153, 0.83), rgba(12, 19, 92, 0.83)), url('/static/imgs/pexels-igor.jpg');
                
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;">
        <div class="content">
        <div class="col-md-7 container pt-2">
            <div class="py-5 ml-auto mr-auto">
                <h2 class="text-white text-center">Create An Account</h2>
                <RegisterForm />
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import RegisterForm from '../components/auth/registerForm'

export default {
    name: 'Register',
    components:{
        RegisterForm
    }
}
</script>