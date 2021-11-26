import db from '@/db/index'

export function syncData (data) {
  return db.iwara_info.bulkPut(data)
}

export function getVideoList (params = {}) {
  const { orderBy, page, size } = params
  return db.iwara_info
    .orderBy(orderBy || 'id')
    .reverse()
    .offset(36 * (page - 1))
    .limit(size)
    .toArray()
}
