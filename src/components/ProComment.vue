<template>
  <div class="comment">
    <div class="comment-list">
        <div class="comment-item" v-for="item in commentList" :key="item.commentList_id">
          <div class="top">
            <img :src="item.user.avatar_url || defaultImg" alt="">
            <div class="name">{{item.user.nick_name}}</div>
            <van-rate :size="16" :value="item.score / 2" color="#ffd21e"  void-icon="star" void-color="#eee" ></van-rate>
          </div>
          <div class="content">{{item.content}}</div>
          <div class="time"> {{item.create_time}}</div>
        </div>
      </div>
  </div>
</template>
<script>
import defaultImg from '@/assets/default-avatar.png'
export default {
  name: 'APP',
  props: {
    commentList: {
      type: Array
    }
  },
  data () {
    return {
      defaultImg
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
 .comment {
    padding: 5px;
  }
.comment-item {
    font-size: 16px;
    line-height: 30px;
    border-bottom: 1px solid #f7f7f7;
    .top {
      height: 30px;
      display: flex;
      align-items: center;
      margin-top: 10px;
      img {
        width: 20px;
        height: 20px;
      }
      .name {
        margin: 0 10px;
      }
    }
    .time {
      color: #999;
    }
  }
</style>
