<template>
  <ul class='subMenu'>
    <li v-for='subCat in value' @click='changeSubMenu(subCat)'>{{subCat}}</li>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    changeSubMenu(subCat) {
      this.$store.dispatch('changeSubMenu', subCat);
    },
  },
};
</script>

<style lang="less">
@import '../../../Vars.less';
@import './Submenu.less';
</style>
