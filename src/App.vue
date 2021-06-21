<template>
  <Navbar />
    <router-view />
  <Footer />

</template>

<script>
import Navbar from './components/general/navbar'
import Footer from './components/general/footer'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    // SearchBar,
    // ThreadCard
  }
}
</script>

<style>
.v-enter-from,
.v-enter-to{
  opacity: 0;
}

.v-enter-active,
.v-leave-active{
  transition: opacity 0.5s ease-out;
}
</style>
