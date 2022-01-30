<template>
  <div class="task-list">
    <transition-group name="slideUp">
      <app-list-item v-for="task in tasks" :key="task.id" :type="type" :id="task.id" :name="task.name" :desc="task.desc"></app-list-item>
    </transition-group>
  </div>
</template>
<script>
import AppListItem from '@/components/AppListItem.vue'
export default {
  name: 'AppList',
  components: {
    AppListItem
  },
  props: {
    type: {
      type: String,
      default: 'active'
    }
  },
  computed: {
    tasks() {
      if (this.type == 'active') {
        return this.$store.getters.getActiveTasks
      } else {
        return this.$store.getters.getInactiveTasks
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .task-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .slideUp-enter-active, .slideUp-leave-active {
    transition: transform 300ms, opacity 300ms;
  }
  .slideUp-enter, .slideUp-leave-to {
    position: absolute;
    opacity: 0;
    transform: translateY(-100px);
  }
</style>