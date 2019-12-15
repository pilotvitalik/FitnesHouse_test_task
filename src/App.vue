<template>
  <Wrapper/>
</template>

<script>
import Wrapper from './components/Wrapper/Wrapper.vue';

export default {
  components: {
    Wrapper,
  },
  methods: {
    initialLoad() {
      this.$store.dispatch('initialLoad');
    },
  },
  created() {
    this.initialLoad();
  },
};
</script>

<style lang="less">
*{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
ul, li{
  list-style-type: none;
}
</style>
