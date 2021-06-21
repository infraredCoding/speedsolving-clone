<template>
  <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-primary ">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="#">
          <img src="/static/imgs/speedsolving-logo.png" height="47">
        </a>
      </div>
      <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <i class="text-white fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <p>Home</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/forum">
              <p>Forums</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Resources' }" >
              <p>Resources</p>
            </router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://www.speedsolving.com/wiki/index.php/Main_Page">
              <p>Wiki</p>
            </a>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'InterviewList' }">
              <p>Interviews</p>
            </router-link>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="https://discord.com/invite/YhpwWwh">
              <p>Chat</p>
            </a>
          </li>


          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }">
              <p>Login</p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link btn btn-info" :to="{name: 'Register'}">
              <p>Register</p>
            </router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>


<style scoped>

</style>