<template>
	<v-app>
		<v-app-bar app>
			<!-- -->
		</v-app-bar>
		<v-navigation-drawer permanent app>
			<AsideMenu />
		</v-navigation-drawer>

		<!-- 根据应用组件来调整你的内容 -->
		<v-main>
			<!-- 给应用提供合适的间距 -->
			<v-container fluid>
				<!-- 如果使用 vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app>
			<!-- -->
		</v-footer>
	</v-app>
</template>

<script>
import AsideMenu from './components/App/AsideMenu.vue';
export default {
	name: 'App',
	components: {
		AsideMenu
	},
	data: () => ({
		navigationVisible: true
		//
	}),
};
</script>
