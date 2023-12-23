<template>
  <div>活动列表</div>
  <div>
    <nut-cell v-for="item in activityList" :key="item.id" :title="item" size="large" desc="描述文字"></nut-cell>
  </div>
</template>

<script>
export default {
  props: {
    activityList: {
      type: Array,
      default: []
    },
  },
  data() {
    return {
      text: "niaho"
    }
  },
  methods: {
    hello() {

    }
  },
  mounted() {
    console.log(this.$refs.hello);
  },
}
</script>

<style lang="sass" scoped>

</style>