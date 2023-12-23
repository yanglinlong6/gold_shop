<template>
	<view class="content">
		<nut-searchbar v-model="searchValue" class="search">
			<template v-slot:rightin>
				<nut-icon name="search2" />
			</template>
		</nut-searchbar>
		<nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000" height="130">
			<nut-swiper-item>
				<img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
			</nut-swiper-item>
			<nut-swiper-item>
				<img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
			</nut-swiper-item>
			<nut-swiper-item>
				<img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
			</nut-swiper-item>
			<nut-swiper-item>
				<img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
			</nut-swiper-item>
		</nut-swiper>

		<view style="background-color: white;margin-top: 10px;border-radius: 10px;">
			<nut-row>
				<nut-col :span="12">
					<div class="flex-content" @click="changeProduct(1)">品类</div>
				</nut-col>
				<nut-col :span="12">
					<div class="flex-content flex-content-light" @click="changeProduct(2)">款式</div>
				</nut-col>
			</nut-row>
			<!-- 网格布局 -->
			<classifyItem :classList=classList />
			<!-- 活动列表 -->
			<activityItem :activityList=activityList />
		</view>


	</view>
</template>

<script>
import activityItem from '@/components/activityItem.vue';
import classifyItem from '@/components/classifyItem.vue';
import storeCommon from '@/store';
export default {
	components: {
		classifyItem,
		activityItem,
	},
	data() {
		return {
			title: 'Hello',
			searchValue: "",
			classList: ['品类', '品类1', '品类2', '品类3', '品类4', '品类5', '品类6'],
			activityList: ['活动', '活动1', '活动2', '活动3', '活动4', '活动5', '活动6']
		};
	},
	onLoad() {
		storeCommon.setStorageSync('1', 'dddd')
	},
	methods: {
		changeProduct(num) {
			// uni.setStorage({
			// 	key: "key",
			// 	data: "value",
			// 	success() {
			// 		wx.getStorage({
			// 			key: "key",
			// 			success(res) {
			// 				console.log(res.data)
			// 			}
			// 		})
			// 	}
			// })
			if (num == 1) {
				this.classList = ['品类', '品类1', '品类2', '品类3', '品类4', '品类5', '品类6']
			} else {
				this.classList = ['款式', '款式1', '款式2', '款式3', '款式4', '款式5', '款式6']
			}
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: auto;
	margin-top: 0upx;
}

.search {
	position: fixed;
	margin-top: 0px;
}
</style>
