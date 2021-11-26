<template>
	<v-app>
		<v-app-bar app>
			<!-- -->
		</v-app-bar>
		<v-navigation-drawer permanent app>
			<AsideMenu />
		</v-navigation-drawer>

		<!-- 根据应用组件来调整你的内容 -->
		<v-main id="main">
			<!-- 标签页部分 START-->
			<div id="test" style="width: 100%">
				<div
					class="position-absolute"
					style="z-index: 100; width: 100%"
				>
					<v-card>
						<v-tabs
							dark
							background-color="teal darken-3"
							show-arrows
						>
							<v-tabs-slider
								color="teal lighten-3"
							></v-tabs-slider>

							<v-tab v-for="i in 30" :key="i" :href="'#tab-' + i">
								Item {{ i }}
							</v-tab>
						</v-tabs>
					</v-card>
				</div>
			</div>

			<!-- 标签页部分 END-->

			<!-- 给应用提供合适的间距 -->
			<v-container fluid class="mt-16">
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
	mounted () {
	}
};
</script>

