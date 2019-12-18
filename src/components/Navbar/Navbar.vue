<template>
  <div class='header' ref='header' @click="showSubMenu('закрыть фильтр')">
    <nav>
      <router-link tag='h2' to='/' @click.native='backToMain'>Fitness House Market</router-link>
      <div class='box'>
        <keep-alive>
          <span>{{ counter }}</span>
        </keep-alive>
        <span></span>
        <p>Корзина</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    showSubMenu(close) {
      this.$store.dispatch('showSubMenu', close);
    },
    backToMain() {
      this.$store.dispatch('backToMain');
    },
  },
};
</script>

<style lang="less">
@import '../../Vars.less';
@import './Navbar.less';
</style>
