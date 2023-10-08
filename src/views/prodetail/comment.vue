<template>
  <div class="comment-list-item">
    <van-nav-bar fixed title="商品评价页面" left-arrow @click-left="$router.go(-1)" />
    <div class="box">
      <van-tabs  title-active-color="red"  v-model="active" @click="onClick" :sticky="true">
        <van-tab :name="-1" :title="`全部(${all})`"></van-tab>
        <van-tab :name="10" :title="`好评(${praise})`"></van-tab>
        <van-tab :name="20" :title="`中评(${review})`"></van-tab>
        <van-tab :name="30" :title="`差评(${negative})`"></van-tab>
      </van-tabs>

      <ProComment :commentList="commentList"/>
      </div>
  </div>
</template>
<script>
import { getProComments, getCommentslist, getCommentsTotal } from '@/api/product'
import ProComment from '@/components/ProComment.vue'
export default {
  name: 'APP',
  components: {
    ProComment
  },
  data () {
    return {
      commentList: [],
      active: -1,
      all: 0,
      praise: 0,
      review: 0,
      negative: 0
    }
  },
  computed: {
    goodsId () {
      return this.$route.params.id
    }
  },
  methods: {
    async getComments () {
      const { data } = await getProComments(this.goodsId)
      this.commentList = data.list
      this.total = data.total
      console.log(data)
    },
    async onClick (name) {
      const { data: { list } } = await getCommentslist(name, this.goodsId)
      this.commentList = list.data
    },
    async getCommentsTotal () {
      const { data: { total } } = await getCommentsTotal(this.goodsId)
      this.all = total.all
      this.praise = total.praise
      this.review = total.review
      this.negative = total.negative
    }

  },
  created () {
    this.getComments()
    this.getCommentsTotal()
    console.log(this.goodsId)
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.box{
  padding-top: 40px;
}
</style>
