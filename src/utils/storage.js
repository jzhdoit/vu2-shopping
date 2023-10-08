const INFO_KEY = 'shopping_info'
const HISTORY_KEY = 'history_list'

export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  const defaultobj = { token: '', userId: '' }
  return result ? JSON.parse(result) : defaultobj
}

export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}

export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
