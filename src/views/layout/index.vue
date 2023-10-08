<template>
  <div>
    <!-- 二级路由出口：二级组件展示的位置 -->
    <router-view></router-view>
    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="/cart" :badge="Total" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'layoutIndex',
  data () {
    return {
    }
  },
  computed: {
    // 购物车角标值
    Total () {
      const cartTotal = this.$store.state.cart.cartTotal
      const Total = cartTotal > 0 ? cartTotal : undefined
      return Total
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>

</style>
