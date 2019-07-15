<template>
	<div class="more">
		<i class="el-icon-s-fold ico" @click="openMore"></i>
		<moreView :open="msg" @myevent="changeOpen"></moreView>
	</div>
</template>

<script>
	import moreView from "@/components/moreView.vue";
	export default {
		data() {
			return {
				msg: ""
			};
		},
		components: {
			moreView
		},
		methods: {
			openMore() {
				this.msg = "isopen";
			},
			changeOpen(value) {
				this.msg = value;
			}
		}
	};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		text-decoration-line: none;
	}

	.more {
		position: relative;
	}

	.ico {
		width: 100%;
		height: 100%;
		font-size: 1.5rem;
	}
</style>
