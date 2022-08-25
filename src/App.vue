<template>
  <div class="content">
    <router-view/>
    <Footer />
  </div>
</template>
<script>
  import Footer from './components/Footer.vue'
  export default{
    components: {Footer}
  }
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding:24px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background: crimson;
  color: white;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: absolute;
  height: 100%;
  width: 100%;
}

</style>
