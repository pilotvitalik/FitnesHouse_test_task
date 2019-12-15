<template>
  <ul>
    <li class='itemServices' v-for='item in listServices'>
      <Card :item='item'/>
    </li>
  </ul>
</template>

<script>
import Card from '../../../../components/Card/Card.vue';

export default {
  components: {
    Card,
  },
  computed: {
    listServices() {
      return this.$store.state.resultCommonArray;
    },
  },
};
</script>

<style lang="less">
@import '../../../../Vars.less';
@import '../MainList/MainList.less';
</style>
