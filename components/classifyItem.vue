<template>
  <div>
    <nut-grid :column-num="3">
      <nut-grid-item v-for="item in classList" :key="item.id" :text="item">dongdong</nut-grid-item>
    </nut-grid>
  </div>
</template>

<script>
export default {
  props: {
    classList: {
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