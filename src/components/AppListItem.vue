<template>
  <div class="task">
    <div class="task__name">{{ item.name }}</div>
    <div class="task__desc">{{ item.desc }}</div>
    <div @click="changeItemType()" class="task__link link">Mark as <span v-if="typeOfTask">Inactive</span><span v-else>Active</span></div>
    <div @click="deleteItem()" class="task__delete"></div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'AppListItem',
  props: {
    type: {
      type: String,
      default: 'active'
    },
    id: {
      type: String,
      default: 'Example of Task Name'
    },
    name: {
      type: String,
      default: 'Example of Task Name'
    },
    desc: {
      type: String,
      default: 'Example of Task Description'
    },
  },
  data() {
    return {
      item: {
        id: this.id,
        name: this.name,
        desc: this.desc
      }
    }
  },
  computed: {
    typeOfTask() {
      if (this.type === 'active') {
        return 1
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapMutations(["setInactiveTask", "setActiveTask", "deleteActiveTask", "deleteInactiveTask"]),
    deleteItem() {
      if (this.typeOfTask) {
        this.deleteActiveTask(this.item)
        this.init()
      } else {
        this.deleteInactiveTask(this.item)
      }
    },
    changeItemType() {
      if (this.typeOfTask) {
        this.setInactiveTask(this.item)
        this.deleteActiveTask(this.item)
      } else {
        this.setActiveTask(this.item)
        this.deleteInactiveTask(this.item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/_variables.scss";
.task {
  position: relative;
  margin-bottom: 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #fffffc 0%, #f2f2e4 100%);
  box-shadow: -4px 4px 8px rgba(214, 214, 206, 0.2),
    4px -4px 8px rgba(214, 214, 206, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.9),
    4px 4px 10px rgba(214, 214, 206, 0.9),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3),
    inset -1px -1px 2px rgba(214, 214, 206, 0.5);
  padding: 24px;
  &__name {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  &__desc {
    max-height: 100px;
    overflow: hidden;
    margin-bottom: 16px;
  }
  &__link {
    font-size: 14px;
  }
  &__delete {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    transform: rotate(45deg);
    &::before,
    &::after {
      content: "";
      display: block;
      width: 15px;
      height: 2px;
      border-radius: 1px;
      background-color: $colorGray;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}
</style>