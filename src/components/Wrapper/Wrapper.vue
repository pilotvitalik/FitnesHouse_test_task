<template>
  <div id='wrapper'>
      <Navbar/>
      <Sorting/>
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
  data() {
    return {};
  },
};
</script>

<style lang="less">
</style>
