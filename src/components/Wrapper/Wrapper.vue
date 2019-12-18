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
  methods: {
    specificService(id) {
      this.$store.dispatch('specificService', id);
    },
    currentComponent(id) {
      this.$store.dispatch('currentComponent', id);
    },
  },
  created() {
    this.currentComponent(this.$route.path);
    if (this.$route.path !== '/') {
      this.specificService(this.$route.params.id);
    }
  },
};
</script>

<style lang="less">
#wrapper{
  width: inherit;
}
</style>
