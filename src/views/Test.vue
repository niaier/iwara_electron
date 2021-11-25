<!-- 组件说明 -->
<template>
	<div class="">
		<v-btn @click="syncData">同步</v-btn>
	</div>
</template>

<script>
//import x from ''
import { getData } from '../api/web/api';
import { syncData } from '../api/local/api';
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
		}
	},
}
</script>

<style lang='scss' scoped>
//@import url()
</style>