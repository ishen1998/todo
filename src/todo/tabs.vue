<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} 条代办事项</span>
    <span class="tabs">
      <span
        v-for="state in states"
        :key="state"
        :class="[state,filter===state?'actived':'']"
        @click="toggleFilter(state)"
      >{{state}}</span>
    </span>
    <span class="clear" @click="clearAllCompleted">清除所有事项</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      states: ["所有", "未完成", "已完成"]
    }
  },
  computed:{
    unFinishedTodoLength(){
      return this.todos.filter(itme => !itme.completed).length
    }
  },
  props: {
    filter: {
      type: String,
      required: true
    },
    todos:{
      type:Array,
      required:true
    }
  },
  methods: {
    clearAllCompleted() {
      this.$emit('clearAll')
    },
    toggleFilter(state) {
      this.$emit('toggle',state)
      // console.log(state)
    }
  }
}
</script>
<style scoped>
.helper {
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  line-height: 30px;
  background-color: #fff;
  font-size: 14px;
  font-smoothing: antialiased;
}
.left,
.clear,
.tabs {
  padding: 0 10px;
  box-sizing: border-box;
  font-weight: bold;
}
.left,
.clear {
  width: 150px;
}
.left {
  text-align: left;
}
.clear {
  text-align: right;
  cursor: pointer;
}
.tabs {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
.tabs * {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  border: 1px solid rgba(175, 47, 47, 0);
}
.tabs *.actived {
  border-color: rgba(175, 47, 47, 0.4);
  border-radius: 5px;
}
</style>
