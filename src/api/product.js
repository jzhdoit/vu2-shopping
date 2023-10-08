import request from '@/utils/request'
// 商品搜索
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}
// 商品详情页
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}
// 获取商品评论
export const getProComments = (goodsId, limit = 10) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
// 商品评价列表
export const getCommentslist = (scoreType, goodsId, page = 1) => {
  return request.get('/comment/list', {
    params: {
      scoreType,
      goodsId,
      page
    }
  })
}
// 获取商品评价总数
export const getCommentsTotal = (goodsId) => {
  return request.get('/comment/total', {
    params: {
      goodsId
    }
  })
}
