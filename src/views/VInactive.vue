<template>
  <section class="inactive">
    <div class="container">
      <h1>Inactive Tasks</h1>
      <app-list type="inactive"></app-list>
    </div>
  </section>
</template>
<script>
import AppList from '@/components/AppList.vue'
export default {
  name: 'Inactive',
  components: {
    AppList
  }
}
</script>