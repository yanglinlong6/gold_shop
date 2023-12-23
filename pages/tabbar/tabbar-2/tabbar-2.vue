<template>
	<view class="content">
		购物车页面
		<text>用户名：{{ username }}</text>
		<view>年龄：{{ age }}</view>
		<nut-button type="primary" @click="test">测试</nut-button>
	</view>
</template>

<script>
import storeCommon from '@/store';
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {
		console.log("onLoad===", storeCommon)
	},
	methods: {
		test() {
			let teststr = uni.getStorageSync('1')
			console.log('teststr===', teststr)
		}
	},
	computed: {
		username() {
			const res = uni.getStorageInfoSync();
			console.log(res.keys);
			console.log(res.currentSize);
			console.log(res.limitSize);
			let str = storeCommon.getStorageSync('1')
			console.log('str===', str)
			return str
		}
	},
	created() {
		console.log("store===", storeCommon)
	}
}
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
