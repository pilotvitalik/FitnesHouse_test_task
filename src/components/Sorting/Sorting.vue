<template>
  <ul class='listItems'>
      <li class='item' v-for='cat in filters' :class="{display: cat.isShow}">
        <p class='btn' @click='showSubMenu(cat.title)'>{{cat.title}}</p>
        <transition name='SubMenu'>
          <Submenu :value='cat.value' v-if='cat.isShow'/>
        </transition>
        <button @click='showSubMenu(cat.title)' :class="{displayBtn: cat.isShow}">
          <span></span>
        </button>
      </li>
  </ul>
</template>

<script>
import Submenu from './Submenu/Submenu.vue';

export default {
  components: {
    Submenu,
  },
  computed: {
    filters() {
      return this.$store.state.categories;
    },
    show() {
      return this.$store.state.show;
    },
  },
  methods: {
    showSubMenu(title) {
      this.$store.dispatch('showSubMenu', title);
    },
  },
};
</script>

<style lang="less">
@import '../../Vars.less';
@import './Sorting.less';
</style>
