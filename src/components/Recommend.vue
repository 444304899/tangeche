<template>
	<div class="pear-dog-recommend-for-you mb-12">
		<div class="nav-header"><span class="fs-17 text-weight">为你推荐</span><a href="/buy" class="all-recommend fs-13">
				更多<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB7ZRBDoIwEEVHKpjgxiNwBFmy7A30CJzQIzQmRjYmegSOwFJpoLZsiC5Km8xUF31JQ0NS/iO/GYBI5MesAJHL9Sb0B7v+xWrOy87lTAKYKCiUgkOaDUKI+87lCKqATCTXj1avvasEagUG0TRFOqZCbwu9HrJn3FYHuoCvBImAjwSZgKsEqYCLBLnAkkQQAZsE7iCywKuq/ZgTm+Fk3gcTmHjO25WCLqiAELqCbK6gz1k9iUAAvsNlrvsvA11CWzi5wFI4qYBLOJmAaziJgE84uoBvuAF1DviGG9aAyKjgrP+olVt2dAmPRP6CN/DToU7cwCPPAAAAAElFTkSuQmCC"
				 height="16"></a></div>
		<div class="recommend-content">
			<div class="pear-dog-index-cars">
				<!---->
				<div class="remove-scrollbar">
					<div class="scroll-list">
						<div class="scroll-item" v-for="(item,index) in recommends" :key="index" v-if="index<5">
							<a href="/buy/detail/351704" class="pear-other-link item-link">
								<div>
									<div class="fix-img">
										<img width="100%" height="100%" class="oss-image tag-img" data-src="item.tagimg" :src="item.tagimg" lazy="loaded">
										<img width="100%" height="" class="oss-image car-img" data-src="item.carimg" :src="item.carimg" lazy="loaded">
									</div>
									<div class="content-word">
										<div class="word-car"><span class="car-name">{{item.simpleName}}</span>
											<!---->
										</div><span class="down-payment">首付<span>{{item.downPayment}}</span>万</span><span class="month-installment">月供{{item.monthInstallment}}元</span>
									</div>
								</div>
							</a>
						</div>
						<!---->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recommends: []
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
				this.recommends = response.data;
			}).catch(function(error) {
				console.log(error);
			});
		},
	};
</script>

<style>
	.nav-header {
		padding: 0.9375rem 0;
		margin: 0 0.5rem 0 0.75rem;
		height: 1.0625rem;
		font-size: 0;
		color: #1a1d33;
		position: relative;
	}

	.nav-header span {
		display: inline-block;
		line-height: 1;
	}

	.nav-header .all-new-car {
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-pack: center;
		-webkit-box-pack: center;
		justify-content: center;
		color: #c4c5cc;
		float: right;
		line-height: 1.0625rem;
	}

	.nav-header .all-new-car i {
		margin-top: 0.125rem;
	}

	.nav-header:after {
		content: "";
		height: 0.0625rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
		background: #ebedf0;
	}

	.pear-dog-recommend-for-you {
		padding: 0 0.5rem 0 0.25rem;
		background-color: #fff;
	}

	.pear-dog-recommend-for-you .nav-header .all-recommend {
		height: 1.5rem;
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-pack: center;
		-webkit-box-pack: center;
		justify-content: center;
		color: #c4c5cc;
		float: right;
		line-height: 1.0625rem;
	}

	.pear-dog-recommend-for-you .recommend-content {
		margin-left: -0.25rem;
		margin-right: -0.5rem;
	}

	.pear-dog-index-cars {
		overflow: hidden;
		background: #fff;
	}

	.pear-dog-index-cars .remove-scrollbar {
		overflow: hidden;
	}

	.pear-dog-index-cars .scroll-list {
		padding: 0.5rem 0.5rem 2rem;
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-align: center;
		-webkit-box-align: center;
		align-items: center;
		overflow-x: auto;
		margin-bottom: -1.5rem;
	}

	.pear-dog-index-cars .scroll-item {
		width: 40%;
		-ms-flex-negative: 0;
		flex-shrink: 0;
	}

	.pear-dog-index-cars .item-link {
		position: relative;
		margin-right: 0.5rem;
		padding: 0.5rem 0.5rem 0.625rem;
		background: #fff;
		border-radius: 0.5rem;
	}

	.pear-dog-index-cars .item-link .fix-img {
		width: 100%;
		padding-top: 75%;
		position: relative;
		margin-bottom: 0.5rem;
		border-radius: 0.25rem;
		overflow: hidden;
	}

	.pear-dog-index-cars .item-link .fix-img img {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
	}

	.pear-dog-index-cars .item-link .tag-img {
		z-index: 1 !important;
		width: 2rem;
		height: 2rem;
	}

	.pear-dog-index-cars .item-link .fix-img .car-img {
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		border-radius: 0.25rem;
	}

	.pear-dog-index-cars .item-link .content-word {
		position: relative;
		z-index: 1;
		text-indent: 0.125rem;
	}

	.pear-dog-index-cars .item-link .word-car {
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-pack: justify;
		-webkit-box-pack: justify;
		justify-content: space-between;
		-ms-flex-align: center;
		-webkit-box-align: center;
		align-items: center;
	}

	.pear-dog-index-cars .item-link .car-name {
		font-weight: 700;
		font-size: 13px;
		color: #1a1d33;
	}

	.pear-dog-index-cars .item-link .down-payment {
		font-size: 0.75rem;
		font-weight: 700;
		color: #fc3425;
		margin-top: -3px;
		margin-bottom: 0;
	}

	.pear-dog-index-cars .item-link .down-payment>span {
		display: inline;
		font-size: 1.0625rem;
		margin: 0 1px;
	}

	.pear-dog-index-cars .item-link .month-installment {
		font-size: 0.75rem;
		color: #8d8e99;
	}

	.pear-dog-index-cars .scroll-item span {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
