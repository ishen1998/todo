<template>
  <div>
    <section class="real-app">
      <!-- autofocus="autofous" 自动聚焦 -->
      <input
        type="text"
        class="add-input"
        autofocus="autofous"
        @keyup.enter="addTodo"
        placeholder="接下去要做什么？"
      />
      <Item :todo1="itme" v-for="itme in filteredTodos" :key="itme.id" @del="deleteTodo"></Item>
      <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAll="clearAllCompleted"></Tabs>

      <!--  -->
    </section>
  </div>
</template>
<script>
let id = 0;
import Item from "./itme.vue";
import Tabs from "./tabs.vue";
export default {
  data() {
    return {
      todos: [],
      filter: "所有"
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "所有") {
        return this.todos;
      }
      const completed = this.filter === "已完成";
      return this.todos.filter(item =>  item.completed=== completed);
    }
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      // console.log(id)
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      // console.log(state)
      this.filter = state;
    },
    clearAllCompleted(){
      this.todos=[]
    }
  },
  components: {
    Item,
    Tabs
  }
};
</script>
<style scoped>
.real-app {
  width: 700px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
  margin: 10px auto;
}
.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
