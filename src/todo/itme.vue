<template>
  <div :class="['todo-item',todo1.completed?'completed':'']">
    <input type="checkbox" class="toggle" v-model="todo1.completed" />
    <label>{{todo1.content}}</label>
    <button class="destroy" @click="deleteTodo"></button>
  </div>
</template>
<script>
export default {
  props: {
    todo1: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del',this.todo1.id)
    }
  }
};
</script>
<style scoped>
.todo-item{
  position: relative;
  background-color: #fff;
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.todo-item:hover .destroy:after {
  content: 'x';
}
.todo-item label{
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
}
.todo-item.completed label{
  color: #d9d9d9;
  text-decoration: line-through;
}
.toggle{
  text-align: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  padding-left: 5px;
  cursor: pointer;
}
.toggle:after {
  content: url('../assets/images/round.svg');
}
.toggle:checked:after {
   content: url('../assets/images/done.svg');
}
.destroy{
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  background-color: transparent;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border-width: 0;
  cursor: pointer;
  outline: none;
}
</style>
