import { getAction } from '@/api/web/manage'

// 获取所有
const getData = (params) => getAction('http://localhost:3001/data', params)
// const getTotalFigureList = (params) => getAction('http://154.202.59.84:3000/data/getTotalData', params)

export {
  getData
}