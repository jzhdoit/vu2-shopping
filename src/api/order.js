import request from '@/utils/request'

// 订单结算
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      ...obj
    }

  })
}
// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10,
    couponId: 0,
    payType: 10,
    isUsePoints: 0,
    ...obj

  })
}
// 我的-订单
export const getMyOrderList = (dateType, page) => {
  return request.get('/order/list', {
    params: {
      dateType,
      page
    }
  })
}
// 我的-取消订单
export const cancelOrder = (orderId) => {
  return request.post('/order/cancel', {
    orderId
  })
}
// 我的-订单确认收货
export const confirmReceive = (orderId) => {
  return request.post('/order/receipt', {
    orderId
  })
}
// 我的-提交商品评价
// export const submitComment = (orderId, goodsId, order_goods_id) => {
//   return request.post('/order.comment/submit', {
//     orderId,
//     form: {
//       goods_id: goodsId,
//       order_goods_id,
//       score: 10,
//       content: '这个手机很不错',
//       imageList: [
//         {},
//         {}
//       ],
//       uploaded: [
//         '10307',
//         '10308'
//       ]
//     }
//   })
// }
// 我的-订单详情
export const orderId = (orderId) => {
  console.log(orderId)
  return request.get('/order/detail', {
    params: {
      orderId
    }
  })
}
