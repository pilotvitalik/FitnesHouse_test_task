<template>
  <transition>
    <component :is='view'></component>
  </transition>
</template>

<script>
import ListServices from '../../views/ListServices/ListServices.vue';
import SpecificService from '../../views/SpecificService/SpecificService.vue';

export default {
  components: {
    ListServices,
    SpecificService,
  },
  computed: {
    view() {
      return this.$store.state.view;
    },
  },
};
</script>

<style lang="less">
</style>
