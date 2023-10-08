<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
    <template #action>
      <van-icon class="tool" name="apps-o"></van-icon>
    </template>
  </van-search>

  <!-- 排序选项按钮 -->
  <van-tabs v-model="active" @click="onClick" sticky >
    <van-tab title="综合" name="all" ></van-tab>
    <van-tab title="销量" name="sales" ></van-tab>
    <van-tab title="价格" name="price" ></van-tab>
  </van-tabs>

  <div class="goods-list">
    <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
  </div>
  </div>
</template>
<script>
import GoodsItem from '@/components/GoodsItem.vue'
import { getProList } from '@/api/product'
export default {
  name: 'APP',
  components: {
    GoodsItem
  },
  data () {
    return {
      page: 1,
      proList: [],
      active: ''
    }
  },
  computed: {
    // 获取地址栏的搜索关键字
    querySearch () {
      return this.$route.query.search
    }
  },
  methods: {
    async onClick (name) {
      console.log(name)
      const { data: { list } } = await getProList({
        categoryId: this.$route.query.categoryId,
        goodsName: this.querySearch,
        page: 1,
        sortType: name
      })
      this.proList = list.data
      console.log(list)
    }
  },
  async created () {
    const { data: { list } } = await getProList({
      categoryId: this.$route.query.categoryId,
      goodsName: this.querySearch,
      page: 1,
      sortType: 'all'
    })
    this.proList = list.data
    console.log(list)
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.search{
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool{
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }
  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}
// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
