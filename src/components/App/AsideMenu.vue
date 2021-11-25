<!-- 组件说明 -->
<template>
	<div class="">
		<v-list nav>
			<v-list-item
				v-for="([name, path, icon], index) in menulist"
				:key="index"
				link
				:to="path"
			>
				<v-list-item-icon>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ name }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
//import x from ''
export default {
	name: 'AsideMenu',
	components: {

	},
	data () {
		return {
			menulist: [
				['首页', 'home', 'mdi-home'],
				['资源', 'resource', 'mdi-view-list'],
				['测试', 'test', 'mdi-view-list'],

			]
		}
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