<template>
  <section class="add-task">
    <div class="container">
      <h1>Add new task</h1>
      <div class="add-task__form">
        <div class="input-wrapper">
          <label class="label">Name of task</label>
          <input
            v-model="name"
            class="input"
            type="text"
            placeholder="Name of task"
          />
        </div>
        <div class="input-wrapper">
          <label class="label">Description of the task</label>
          <textarea
            v-model="desc"
            class="input textarea"
            placeholder="Description of the new task"
          ></textarea>
        </div>
        <div v-if="error.length" class="add-task__error">
          {{error}}
        </div>
        <div @click="addNewTask()" class="add-task__btn">Add task</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "VAddTask",
  data() {
    return {
      name: "",
      desc: "",
      error: ""
    };
  },
  computed: {
    activeTasks() {
      return this.$store.getters.getActiveTasks
    },
    inactiveTasks() {
      return this.$store.getters.getInactiveTasks
    },
    id() {
      return this.name.split(" ").join("-");
    },
  },
  methods: {
    addNewTask() {
      if (this.activeTasks.some(item => item.id === this.id) || this.inactiveTasks.some(item => item.id === this.id)) {
        this.error = "Tasks with this name already exists";
      } else {
        this.$store.commit("setActiveTask", {
          id: this.id,
          name: this.name,
          desc: this.desc,
        });
        this.error = "";
        this.name = "";
        this.desc = "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/_variables.scss";
.add-task {
  &__form {
    width: 400px;
    max-width: 100%;
    margin: 40px auto 0;
  }
  &__error {
    margin-bottom: 16px;
    text-align: center;
    color: rgb(228, 147, 147);
  }
  &__btn {
    width: 100%;
    padding: 16px 24px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    color: $colorGreen;
    background: linear-gradient(135deg, #fffffc 0%, #f2f2e4 100%);
    box-shadow: -4px 4px 8px rgba(214, 214, 206, 0.2),
      4px -4px 8px rgba(214, 214, 206, 0.2),
      -4px -4px 8px rgba(255, 255, 255, 0.9),
      4px 4px 10px rgba(214, 214, 206, 0.9),
      inset 1px 1px 2px rgba(255, 255, 255, 0.3),
      inset -1px -1px 2px rgba(214, 214, 206, 0.5);
    cursor: pointer;
    border-radius: 10px;
  }
}
.input-wrapper {
  margin-bottom: 24px;
  .label {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 500;
  }
  .input {
    width: 100%;
    padding: 16px 24px;
    border: none;
    background-color: #fffff0;
    font-family: "Rubik";
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),
      -1px -1px 2px rgba(207, 207, 194, 0.5),
      inset -4px 4px 8px rgba(207, 207, 194, 0.2),
      inset 4px -4px 8px rgba(207, 207, 194, 0.2),
      inset -4px -4px 8px rgba(255, 255, 255, 0.9),
      inset 4px 4px 10px rgba(207, 207, 194, 0.9);
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.4;
  }
  .textarea {
    resize: none;
  }
}
</style>