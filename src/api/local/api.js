import db from '@/db/index'

export function syncData (data) {
  return db.iwara_info.bulkPut(data)
}
