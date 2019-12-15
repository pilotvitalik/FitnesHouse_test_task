<template>
  <div id='wrapper'>
      <Navbar/>
      <Sorting v-if='showListServices'/>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '../Navbar/Navbar.vue';
import Sorting from '../Sorting/Sorting.vue';

export default {
  components: {
    Navbar,
    Sorting,
  },
  computed: {
    showListServices() {
      return this.$store.state.showListServices;
    },
  },
};
</script>

<style lang="less">
</style>
