<template>
  <div id="app">
    <calendar
      @choseDay="clickDay"
      @changeMonth="changeDate"
      @select="handleSelect"
      :markDateMore="calendarList"
      :futureDayHide="now"
      ref="calendar">
      <template #header="{ date }">
        header
        {{ date }}
      </template>
      <template #footer="{ date }">
        footer
        {{ date }}
      </template>
    </calendar>
  </div>
</template>

<script>
import calendar from './calendar'

export default {
  name: 'app',
  components: {
    calendar
  },
  data () {
    return {
      calendarList: [],
      now: new Date()
    };
  },
  methods: {
    clickDay (date) {
      console.log(date);
    },
    changeDate (date) {
      console.log(date)
    },
    handleSelect (date) {
      console.log(date);
    }
  }
}
</script>

<style scoped>

</style>
