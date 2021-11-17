<!-- 组件说明 -->
<template>
	<div class="">
		<v-row no-gutters>
			<v-col v-for="n in 3" :key="n" cols="3">
				<v-card class="pa-2" height="200" outlined tile></v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
//import x from ''
export default {
	name: '',
	components: {

	},
	data () {
		return {

		};
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