<template>
  <div class="count-box">
    <button @click="handleSub" class="minus">-</button>
    <input class="inp" type="text" @change="handleChange" :value="value">
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>
<script>
export default {
  name: 'APP',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleSub () {
      if (this.value <= 1) return
      this.$emit('input', this.value - 1)
    },
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleChange (e) {
      const num = e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.count-box{
    widows: 110px;
    display: flex;
    .add, .minus{
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
    }
    .inp{
        width: 40px;
        height: 40px;
        outline: none;
        border: none;
        margin: 0 5px;
        background-color: #efefef;
        text-align: center;
    }
}
</style>
