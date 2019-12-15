<template>
  <div class='itemCard'>
    <img :src='item.url'>
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
};
</script>

<style lang="less">
@import '../../Vars.less';
@import './Card.less';
</style>
