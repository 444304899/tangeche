<template>
	<div class="car-list">
		<div class="som-scroll-infinite">
			<div class="inner-content" style="transform: translateY(0px);">
				<section class="down">
					<div style="display: none;"></div>
					<div style="display: none;">
						<img src="//img.souche.com/f2e/9061d06d726327300022dabe3ee5050e.gif" alt="" height="60">
					</div>
					<div style="display: none;">
						<img src="//img.souche.com/f2e/9061d06d726327300022dabe3ee5050e.gif" alt="" height="60">
					</div>
				</section>
				<div class="car-list-content">
					<div v-for="(item,index) in carList" :key="index" v-if="index<14">
						<div class="co-list-new-car-item">
							<a href="/buy/detail/350869" class="" target="_self">
								<div class="flex">
									<div class="car-img">
										<img width="100%" height="100%" :alt="item.fashion" class="oss-image" :data-src="item.carimg" :src="item.carimg"
										 lazy="loaded">
										<img :src="item.tagimg" class="flag-img">
										<!---->
									</div>
									<div class="car-info flex-1 one-line">
										<div class="title"><span class="series-name">{{item.simpleName}} </span><span class="model-name fs-15">{{item.fashion}}</span></div>
										<!---->
										<div class="guide-price">厂商指导价：{{item.price}}万</div>
										<div class="text-primary price">
											<span><b>首付<i class="big-price">{{item.downPayment}}</i>万</b></span>
											<span>月供{{item.monthInstallment}}元</span>
											<button class="list-consult">
												咨询
											</button>
										</div>
										<div class="tag">
											<img src="//img.souche.com/0144ac84eb2594efa8f7fcab7e334b36.png" height="16">
											<img src="//img.souche.com/20190219/png/ed58d0f0945862b803d3148fdce697a4.png" height="16">
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<section class="up">
					<div style="display: none;">
						<div class="co--slot">加载中...</div>
					</div>
					<div style="display: none;">
						<div class="no-result">
							<div class="co-list-no-result">
								<div class="som-blank-page"><i class="no-data"></i>
									<p>
										<p style="margin-bottom: 1.5rem">暂无相关车辆</p>
									</p>
									<span>填写意向车型</span>
								</div>
							</div>
						</div>
					</div>
					<div style="display: none;"></div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				carList: []
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
				this.carList = response.data;
			}).catch(function(error) {
				console.log(error);
			});
		},
	}
</script>

<style scoped>
	@media screen and (max-width: 365px) {
		.co-list-new-car-item .car-info button.list-consult {
			display: none;
		}
	}

	.co-list-new-promotion .tag-info img {
		width: 100%;
		vertical-align: bottom;
	}

	.co-list-new-car-item {
		padding: 0.875rem 0;
		margin-left: 1rem;
		background-color: #fff;
		position: relative;
	}

	.co-list-new-car-item .car-img {
		width: 8rem;
		height: 6rem;
		position: relative;
	}

	.co-list-new-car-item .car-info {
		margin-left: 0.75rem;
		line-height: 1;
	}

	.co-list-new-car-item .car-img .flag-img {
		width: 2.25rem;
		height: 2.25rem;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
	}



	.co-list-new-car-item .car-info .title {
		padding-right: 1rem;
		color: #1b1c33;
		line-height: 1.5;
		white-space: normal;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.co-list-new-car-item .car-info .title .series-name {
		font-size: 0.9375rem;
		font-weight: 700;
		margin-bottom: 0.375rem;
		line-height: 1;
	}

	.co-list-new-car-item .car-info .title .model-name {
		font-weight: 700;
		margin-bottom: 0.625rem;
	}

	.fs-15 {
		font-size: 0.9375rem;
	}

	.co-list-new-car-item .car-info .guide-price {
		margin-top: 0.625rem;
		margin-bottom: 0.1875rem;
		font-size: 0.75rem;
		color: #8d8e99;
	}

	.co-list-new-car-item .car-info .price {
		margin-bottom: 0.0625rem;
		font-size: 0;
	}

	.co-list-new-car-item .car-info .price span {
		margin-right: 0.375rem;
		font-size: 0.75rem;
		line-height: 1.5rem;
	}

	.co-list-new-car-item .car-info .price .big-price {
		font-size: 1.25rem;
		padding: 0 0.125rem;
	}

	.co-list-new-car-item .car-info .price span b i {
		font-style: normal;
	}

	.co-list-new-car-item .car-info .tag {
		font-size: 0;
		line-height: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: nowrap;
		flex-wrap: nowrap;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		overflow: hidden;
		padding-right: 1rem;
	}

	.co-list-new-car-item .car-info .tag img {
		margin-right: 0.1875rem;
		display: inline-block;
	}

	.text-primary {
		color: #ff4d30 !important;
	}

	.co-list-new-car-item .car-info .price button.list-consult {
		width: 3.125rem;
		height: 1.5rem;
		border-radius: 3.125rem;
		background-color: #ffc400;
		border: none;
		color: #1a1d33;
		font-size: 0.8125rem;
		float: right;
		margin-right: 0.75rem;
		margin-top: 0.125rem;


	}
</style>
