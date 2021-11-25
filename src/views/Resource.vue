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
				v-for="n in 4"
				:key="n"
				cols="3"
				height="100px"
				class="d-flex justify-center"
			>
				<v-responsive :aspect-ratio="22 / 15">
					<v-card outlined tile width="100%" height="100%"></v-card>
				</v-responsive>
			</v-col>
		</v-row>
	</div>
</template>

<script>
//import x from ''
const TabGroup = require("electron-tabs");
export default {
	name: '',
	components: {

	},
	data () {
		return {

		};
	},
	mounted () {
		let tabGroup = new TabGroup();
		// let tab = 
		tabGroup.addTab({
			title: "Electron",
			src: "/rescource",
			visible: true
		});
	},
	computed: {

	},
	methods: {

	},
}
</script>

<style lang='scss' scoped>
//@import url()
</style>