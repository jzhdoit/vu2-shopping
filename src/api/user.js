import request from '@/utils/request'

// 我的-获取用户信息
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}
// 我的-商品状态数量
export const getOrderTotal = () => {
  return request.get('/order/todoCounts')
}
