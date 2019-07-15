<template>
	<div class="pear-detail-car-list">
		<div class="car-list-item">
			<div class="pear-detail-car-list-item" v-for="(item,index) in carlist" :key="index" v-if="index<8">
				<figure>
					<img width="100%" height="100%" :alt="item.fashion" class="oss-image car-img" :data-src="item.carimg" :src="item.carimg"
					 lazy="loaded">
					<img width="100%" height="100%" class="oss-image car-little-img" :data-src="item.tagimg" :src="item.tagimg" lazy="loaded">
					<!---->
					<!---->
				</figure>
				<div class="list-item-bottom">
					<div class="item-s">{{item.simpleName}}</div>
					<div class="item-p1">{{item.fashion}}</div>
					<!---->
					<div class="item-p4"><span>首付<b class="fs-20">{{item.downPayment}}</b>万</span> 月供{{item.monthInstallment}}元</div>
					<!---->
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				carlist: []
			}
		},
		methods: {

		},
		created: function() {
			this.axios.get('/getCar', {
				params: {
					newUsed: "new"
				}
			}).then((response) => {
				this.carlist = response.data;
			}).catch(function(error) {
				console.log(error);
			});
		},
	}
</script>

<style>
	.pear-detail-car-list {
		background: #fff;
	}

	.pear-detail-car-list .car-list-item {
		position: relative;
	}

	.pear-detail-car-list-item {
		width: 50%;
		position: relative;
		position: relative;
		display: inline-block;
	}

	.pear-detail-car-list-item:before {
		content: "";
		width: 0.0625rem;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		transform-origin: 100% 100%;
		background: #EBEDF0;
	}

	.pear-detail-car-list-item:after {
		content: "";
		height: 0.0625rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		transform-origin: 100% 100%;
		background: #EBEDF0;
	}

	.pear-detail-car-list-item figure {
		display: inline-block;
		position: relative;
		margin: 0;
		font-size: 0;
		padding: 0.75rem 1rem 0.5rem;
	}

	.pear-detail-car-list-item figure .car-img {
		width: 100%;
		height: 100%;
		border-radius: 0.25rem;
	}

	.pear-detail-car-list-item figure .car-little-img {
		position: absolute;
		width: 2.25rem;
		height: 2.25rem;
		top: 0.75rem;
		left: 1rem;
	}

	.pear-detail-car-list-item .list-item-bottom {
		padding: 0 1rem 0.75rem 1rem;
		line-height: 1.3125rem;
	}

	.pear-detail-car-list-item .list-item-bottom .item-s {
		font-size: 0.9375rem;
		color: #1B1C33;
		font-weight: bolder;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.pear-detail-car-list-item .list-item-bottom .item-p1 {
		font-size: 0.75rem;
		color: #5E5E66;
		line-height: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.pear-detail-car-list-item .list-item-bottom .item-p4 {
		font-size: 0.75rem;
		color: #FF4D30;
		font-weight: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.pear-detail-car-list-item .list-item-bottom .item-p4 span,
	.pear-detail-car-list-item .list-item-bottom .item-p4 b {
		font-weight: bold;
	}
</style>
