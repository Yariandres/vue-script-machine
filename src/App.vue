<template>
  <div>
    <div id="nav">
      <div class="container-fluid">
      <router-link to="/">Home</router-link> |
      <router-link to="/creator">Creator</router-link>

      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
