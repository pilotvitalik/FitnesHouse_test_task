<template>
  <div class='itemCard'>
    <router-link class='itemImage' tag='div'
    :to="{ path: `service/${ item.alias }` }"
    @click.native='showDescripton(item)'>
      <img :src='item.url'>
    </router-link>
    <div class='descript'>
      <h5>
        {{ item.title }}
      </h5>
      <a>
        {{ item.description }}
      </a>
      <form>
        <button v-for='label in item.properties'>
        #{{ label.value }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    showDescripton(item) {
      this.$store.dispatch('showDescripton', item);
    },
  },
};
</script>

<style lang="less">
@import '../../Vars.less';
@import './Card.less';
</style>
