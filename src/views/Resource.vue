<!-- 组件说明 -->
<template>
	<div class="">
		<div>
			<div class="etabs-tabgroup">
				<div class="etabs-tabs"></div>
				<div class="etabs-buttons"></div>
			</div>
			<div class="etabs-views"></div>
		</div>
		<v-row>
			<v-col
				v-for="(item, index) in videoList"
				:key="index"
				cols="3"
				class="d-flex flex-column justify-center"
			>
				<v-responsive :aspect-ratio="22 / 15">
					<v-card outlined tile width="100%"></v-card>
				</v-responsive>
				<div class="mt-3 line-clamp" :title="item.title">
					{{ item.title }}
				</div>
			</v-col>
		</v-row>
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
	data () {
		return {
			videoList: []
		}
	},
	mounted () {
		this.getVideoList()

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
			this.videoList = res
			console.log(res);
		}
	},
}
</script>

<style lang='scss' scoped>
//@import url()
.line-clamp {
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>