<template>
  <div class='descriptionCard'>
    <div class='image'>
      <img :src='description.url' alt=''>
    </div>
    <div class='descript'>
      <h5>{{ description.title }}</h5>
      <p>
        {{ description.fullDescription }}
      </p>
      <p v-for='item in description.properties'>
        {{ item.title }} - {{ item.value }}
      </p>
      <div class='order'>
        <div class='price'>
          <p v-for='price in description.order'>
            {{ price }}
          </p>
        </div>
        <button>Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    description() {
      return this.$store.state.description;
    },
  },
};
</script>

<style lang="less">
@import '../../Vars.less';
.descriptionCard{
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  width: 100%;
  height: auto;
  .image{
    display: block;
    position: relative;
    width: 45.05%;
    height: auto;
    img{
      display: block;
      position: relative;
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
  .descript{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100-45.05-15%;
    height: auto;
    padding-left: 15%;
    h5{
      display: inline-block;
      width: auto;
      height: 13.7px;
      padding-top: 5px;
      color: @titleCardColor;
      font-size: 15px;
      font-weight: 700;
      line-height: 13.7px;
      letter-spacing: 0.65px;
    }
    &>p{
      display: inline-block;
      width: auto;
      height: auto;
      padding-top: 14px;
      color: @itemColorText;
      font-size: 0.9vw;
      line-height: 17px;
      letter-spacing: 0.37px;
    }
    &>p:nth-child(3){
      margin-top: 9px;
    }
    &>p:not(:nth-child(2)){
      display: inline-block;
      width: auto;
      height: auto;
      padding-top: 5px;
      font-size: 0.8vw;
      line-height: 9px;
      letter-spacing: 0.35px;
    }
    &>p:nth-child(4){
      padding-top: 5px;
    }
    .order{
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      position: relative;
      width: 55.5%;
      height: 68px;
      margin-top: 10px;
      .price{
        display: flex;
        flex-flow: row nowrap;
        position: relative;
        width: 115px;
        height: 50px;
        p{
          display: inline-block;
          width: auto;
          height: 50px;
          color: @colorPrice;
          font-size: 25px;
          line-height: 53px;
          margin-left: -1px;
          letter-spacing: 0.5px;
        }
        p:last-child{
          display: inline-block;
          width: auto;
          height: 43px;
          padding-top: 7px;
          margin-left: 2px;
          color: @colorPrice;
          font-size: 11px;
          line-height: 50px;
          letter-spacing: 0.3px;
        }
      }
      button{
        display: inline-block;
        position: relative;
        width: 59px;
        height: 27px;
        color: @textButton;
        font-size: 70%;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: center;
        border: none;
        border-radius: 14%;
        background: @backgroundHeader;
        outline: none;
      }
      button:hover{
        cursor: pointer;
      }
    }
  }
}
@media(min-width: 1401px){
  .descriptionCard{
    justify-content: space-between;
    .image{
      width: 45%;
    }
    .descript{
      width: 45%;
      h5{
        font-size: 1.5vw;
      }
      &>p:nth-child(2){
        margin-top: 1vw;
        font-size: 1vw;
        line-height: 1.7vw;
      }
      &>p:not(:nth-child(2)){
        font-size:  1vw;
        padding-top: 0.6vw;
      }
      .order{
        width: 50%;
        margin-top: 1vw;
        .price{
          width: 130px;
          p{
            font-size: 1.8vw;
          }
          p:last-child{
            font-size: 0.8vw;
          }
        }
        button{
          width: 100px;
          height: 45px;
          font-size: 90%;
        }
      }
    }
  }
}
@media(min-width: 1281px) and (max-width: 1400px){
}
@media(min-width: 1025px) and (max-width: 1280px){
}
@media(min-width: 769px) and (max-width: 1024px){
  .descriptionCard{
    .descript{
      width: 100-45.05-5%;
      padding-left: 5%;
      &>p,
      &>p:not(:nth-child(2)){
        font-size: 10px;
      }
      &>p:nth-child(2){
        width: 80%;
      }
    }
  }
}
@media(max-width: 768px){
  .descriptionCard{
    flex-flow: row wrap;
    height: auto;
    .image,
    .descript{
      width: 100%;
      height: auto;
      padding-left: 0;
    }
    .descript{
      margin-top: 10px;
      h5{
        text-align: center;
      }
      &>p,
      &>p:not(:nth-child(2)){
        font-size: 10px;
      }
      .order{
        width: 250px;
        margin: 0 auto;
        margin-top: 10px;
      }
    }
  }
}
</style>
