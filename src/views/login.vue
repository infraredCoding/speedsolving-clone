<template>
    <div class="page-header-image pt-5" 
        style="background-image:linear-gradient(to bottom, rgba(3, 98, 153, 0.83), rgba(12, 19, 92, 0.83)), url('/static/imgs/pexels-igor.jpg');
                height: 100vh;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;">
        <div class="content pt-5">
        <div class="container pt-5">
            <div class="col-md-4 py-5 ml-auto mr-auto">
                <h2 class="text-white text-center">Login</h2>
                <LoginForm  data-aos="fade-up" data-aos-duration="750"/>
            </div>
        </div>
        </div>
    </div>
</template>


<script>
import LoginForm from '../components/auth/loginForm'

export default {
    name: 'Login',
    components:{
        LoginForm
    }
}
</script>