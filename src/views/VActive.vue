<template>
  <section class="active">
    <div class="container">
      <h1>Active Tasks</h1>
      <app-list type="active"></app-list>
    </div>
  </section>
</template>
<script>
import AppList from '@/components/AppList.vue'
export default {
  name: 'VActive',
  components: {
    AppList
  },
}
</script>
<style lang="sass" scoped>

</style>