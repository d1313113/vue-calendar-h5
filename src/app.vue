<template>
  <div id="app">
    <div v-for="n in 12" :key="n">{{ n }}</div>
  </div>
</template>

<script>
import calendar from './calendar.vue'

export default {
  name: 'app',
  components: {
    calendar
  },
  data () {
    return {
      n1: 123
    };
  },
  created() {
    console.log(12345555599);
  }
}
</script>

<style scoped>

</style>
