import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: {
      active: [
        {
          id: 'active-task-from-vuex',
          name: 'Name of active task from vuex',
          desc: 'Desc of task from vuex'
        }
      ],
      inactive: [
        {
          id: 'inactive-task-from-vuex',
          name: 'Name of inactive task from vuex',
          desc: 'Desc of task from vuex'
        }
      ]
    }
  },
  getters: {
    getActiveTasks(state) {
      return state.tasks["active"];
    },
    getInactiveTasks(state) {
      return state.tasks["inactive"];
    }
  },
  mutations: {
    init(state) {
      let tasksFromLS = JSON.parse(localStorage.getItem("tasks"));
      if (tasksFromLS !== null) {
        state.tasks = tasksFromLS;
      } else {
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    resetLocalStorageRecord(state) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setInactiveTask(state, payload) {
      state.tasks["inactive"].push(payload);
      this.commit("resetLocalStorageRecord");
    },
    setActiveTask(state, payload) {
      if (state.tasks["active"].some(item => item.id === payload.id)) {
        return "This task already exist!!!"
      } else {
        state.tasks["active"].push(payload);
        this.commit("resetLocalStorageRecord");
      }
    },
    deleteInactiveTask(state, payload) {
      let tmp = state.tasks["inactive"].find(item => item.id === payload.id);
      state.tasks["inactive"].splice(state.tasks["inactive"].indexOf(tmp), 1);
      this.commit("resetLocalStorageRecord");
    },
    deleteActiveTask(state, payload) {
      let tmp = state.tasks["active"].find(item => item.id === payload.id);
      state.tasks["active"].splice(state.tasks["active"].indexOf(tmp), 1);
      this.commit("resetLocalStorageRecord");
    }
  },
})