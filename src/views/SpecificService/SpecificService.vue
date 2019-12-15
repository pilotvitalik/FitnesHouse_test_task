<template>
  <div class='specificService'>
    <DescriptionCard/>
  </div>
</template>

<script>
import DescriptionCard from '../../components/DescriptionCard/DescriptionCard.vue';

export default {
  components: {
    DescriptionCard,
  },
};
</script>

<style lang="less">
.specificService{
  display: block;
  position: relative;
  width: 910px;
  height: auto;
  margin: 0 auto;
  margin-top: 95px;
}
@media(min-width: 1401px){
.specificService{
  width: 82.85%;
  height: auto;
}
}
@media(min-width: 1281px) and (max-width: 1400px){
}
@media(min-width: 1025px) and (max-width: 1280px){
  .specificService{
    width: 100%;
  }
}
@media(min-width: 769px) and (max-width: 1024px){
  .specificService{
    width: 100%;
  }
}
@media(max-width: 768px){
  .specificService{
    width: 100%;
  }
}
</style>
