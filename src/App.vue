<template>
  <div id="app">
    <nav>
      <ol>
        <p><router-link to="/home">Home</router-link></p>
        <p><router-link to="/about">About</router-link></p>
      </ol>
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
