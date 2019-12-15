<template>
  <ul>
    <router-link class='itemServices'
    tag='li' v-for='item in listServices' :key='item.title'
    :to="{ path: `service/${ item.alias }` }"
    @click.native='showDescripton(item)'>
      <Card :item='item'/>
    </router-link>
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
  methods: {
    showDescripton(item) {
      this.$store.dispatch('showDescripton', item);
    },
  },
};
</script>

<style lang="less">
@import '../../../../Vars.less';
@import '../MainList/MainList.less';
</style>
