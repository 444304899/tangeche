<template>
	<div class="mask-menu" :class="{isopen:isTrue}">
		<div class="mask" style="" @click="back"></div>
		<div class="row" :class="{ww:isShow}">
			<div class="list">
				<div class="item">
					<router-link to="/">
						<p>首页</p>
					</router-link>
					<router-link to="/buy">
						<p>买新车</p>
					</router-link>
					<router-link to="/buy/used">
						<p>买二手车</p>
					</router-link>
				</div>
				<div class="item">
					<router-link to="/download">
						<p>下载应用</p>
					</router-link>
					<router-link to="/know">
						<p>了解弹个车</p>
					</router-link>
					<router-link to="/login">
						<p>登录</p>
					</router-link>
				</div>
				<div class="item">
					<router-link to="/questions">
						<p>弹弹问答</p>
					</router-link>
					<router-link to="/service">
						<p>服务条款</p>
					</router-link>
					<router-link to="/policy">
						<p>隐私政策</p>
					</router-link>
					<router-link to="/about">
						<p>关于大搜车</p>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isTrue: true,
				isShow: false,
				timer:""
			};
		},
		watch: {
			open: function() {
				if (this.open) {
					this.isTrue = false;
					this.isShow = true;
				}
			}
		},
		props: {
			open: String
		},
		methods: {
			mov(){
				
			},
			back() {
				this.isTrue = true;
				this.isShow = false;
				this.$emit('myevent', "")
				this.timer = setInterval(this.mov, 1000);
			}
		}
	};
</script>

<style>
	/* 	.mask-menu {
		margin-left: 100rem;
	} */
	.ww {
		width: 66% !important;
	}
	.isopen{
		display: none;
	}
	.mask {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, .4);
		z-index: 199;
	}

	.mask {
		color: #000000;
	}

	.mask-menu .row {
		position: fixed;
		right: 0;
		top: 0;
		height: 100%;
		bottom: 0;
		width: 0%;
		background: #fff;
		z-index: 200;
		overflow: auto;
		transition: width 2s;
	}

	.mask-menu .list {
		border-bottom: 0;
	}

	.list {
		position: relative;
		background: #fff;
		padding: 0 0 0 16px;
		margin-bottom: 20px;
		border: 1px solid #f2f2f2;
		border-left: 0;
		border-right: 0;
	}

	.mask-menu .list .item {
		padding: 8px 5px;
	}

	.list .item {
		background-color: #fff;
		color: #1a1a1a;
		position: relative;
		z-index: 2;
		display: block;
		padding: 16px 16px 16px 0;
		border-bottom: 1px solid #f2f2f2;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.mask-menu .item p {
		height: 44px;
		line-height: 44px;
	}
</style>
