<template>
  <ul>
    <li class='itemServices' v-for='item in listServices' :key='item.title'>
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
      return this.$store.state.commonArray;
    },
  },
};
</script>

<style lang="less">
@import '../../../../Vars.less';
@import './MainList.less';
</style>
