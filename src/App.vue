<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/employee/add" class="nav-link"
          >Add Employee</router-link
        >
      </li>
    </div>
  </nav>
  <div class="container mt-3">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
