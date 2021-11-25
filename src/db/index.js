import { Dexie } from 'dexie'

var db = new Dexie('iwara')
db.version(1).stores({
  iwara_info: '++id,dirname,playurl,title,producer,categories,upload_time,love,views,description,isDown,isLoved,playlist'
  // iwara_info: '++user_id,&user_name,user_password,hpoi_name,hpoi_password,avatar_data',
})

export default db

