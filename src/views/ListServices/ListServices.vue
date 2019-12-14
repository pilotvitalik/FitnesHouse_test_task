<template>
  <transition>
    <component :is='viewListService'></component>
  </transition>
</template>

<script>
import MainList from './subViews/MainList/MainList.vue';
import FilterList from './subViews/FilterList/FilterList.vue';

export default {
  components: {
    MainList,
    FilterList,
  },
  computed: {
    viewListService() {
      return this.$store.state.viewListService;
    },
  },
};
</script>

<style lang="less">
</style>
