<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__link">
        <img src="../assets/logo.png" alt="" class="logo">
      </router-link>
      <nav class="nav__list">
        <router-link to="/" class="nav__link link">Active</router-link>
        <router-link to="/inactive" class="nav__link link">Inactive</router-link>
        <router-link to="/add" class="nav__link link">Add new task</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default ({
  name: 'AppHeader',
})
</script>
<style scoped lang="scss">
@import "../assets/_variables.scss";
.header {
  padding: 30px 0;
  &__link {
    display: block;
    width: 100px;
    margin: 0 auto 15px;
  }
}
.logo {
  display: block;
  margin: 0 auto;
  width: 100%;
  object-fit: contain;
}
.nav {
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__link {
    margin: 0 15px;
  }
}

</style>