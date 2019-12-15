<template>
  <div class='main' @click="showSubMenu('закрыть фильтр')">
    <transition>
      <component :is='view'></component>
    </transition>
  </div>
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
  methods: {
    showSubMenu(close) {
      this.$store.dispatch('showSubMenu', close);
    },
  },
};
</script>

<style lang="less">
@import '../../Vars.less';
@import './MainPage.less';
</style>
