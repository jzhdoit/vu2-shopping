<template>
  <div>

    <div class="list">
      <div class="list-item" v-for="(item) in goods" :key="item.goods_id">
        <div class="goods-img">
          <img :src="item.goods_image" alt="">
        </div>
        <div class="goods-content text-ellipsis-2">
          {{item.goods_name}}
        </div>
        <div class="goods-trade">
          <p>¥ {{item.total_pay_price}}</p>
          <p>x {{item.total_num}}</p>
        </div>
      </div>
    </div>

    <div class="radio">
      <van-radio-group  class="group" v-model="radio" direction="horizontal">
        <van-radio name="1" checked-color="#ee0a24">好评</van-radio>
        <van-radio name="2" checked-color="#e9c00c">中评</van-radio>
        <van-radio name="3" checked-color="#756f6f">差评</van-radio>
      </van-radio-group>
    </div>

    <div class="text-area">
      <textarea name="textarea" class="textarea" placeholder="请输入评价内容" id="" cols="30" rows="10"></textarea>
    </div>

    <div class="upload"></div>
  </div>
</template>
<script>
import { orderId } from '@/api/order'

export default {
  name: 'APP',
  data () {
    return {
      goods: []
    }
  },
  computed: {
    orderId () {
      return this.$route.query.orderId
    }
  },
  methods: {
    async getOrderDetail () {
      const { data: { order } } = await orderId(this.orderId)
      this.goods = order.goods
    }
  },
  created () {
    this.getOrderDetail()
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
 .list-item {
      display: flex;
      .goods-img {
        width: 90px;
        height: 90px;
        margin: 0px 10px 10px 0;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .goods-content {
        flex: 2;
        line-height: 18px;
        max-height: 36px;
        margin-top: 8px;
      }
      .goods-trade {
        flex: 1;
        line-height: 18px;
        text-align: right;
        color: #b39999;
        margin-top: 8px;
      }
    }
</style>
