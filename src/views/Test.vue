<!-- 组件说明 -->
<template>
	<div class="">
		<v-btn @click="syncData">同步</v-btn>
		<v-btn @click="getVideoList">获取列表数据</v-btn>
	</div>
</template>

<script>
//import x from ''
import { getData } from '../api/web/api';
import { syncData, getVideoList } from '../api/local/api';
export default {
	name: '',
	components: {

	},
	mounted () {

	},
	data () {
		return {

		};
	},
	computed: {

	},
	methods: {
		async syncData () {
			let params = { type: 'downloaded' }
			console.log(params);
			const res = await getData(params)
			console.log(res.result);
			const addResult = await syncData(res.result)
			console.log(addResult);
			console.log('同步');
		},
		async getVideoList () {
			let params = { page: 1, size: 36, orderBy: 'upload_time' }
			const res = await getVideoList(params)
			console.log(res);
		}
	},
}
</script>

<style lang='scss' scoped>
//@import url()
</style>