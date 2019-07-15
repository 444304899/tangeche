<template>
	<div class="buy">
		<Head></Head>
		<div class="filter-content">
			<div class="co-list-filter">
				<div class="menu">
					<div class="filter-item"><span>车价最低</span><i class="ico el-icon-caret-bottom"></i></div>
					<div class="filter-item"><span>品牌</span><i class="ico el-icon-caret-bottom"></i></div>
					<div class="filter-item"><span>首付</span><i class="ico el-icon-caret-bottom"></i></div>
					<div class="filter-item"><span>月供</span><i class="ico el-icon-caret-bottom"></i></div>
					<div class="filter-item more-filter"><span>筛选</span><i class="ico-filter el-icon-caret-bottom"></i></div>
				</div>
			</div>
			<ul class="co-list-orderBy-filter" style="display: none;">
				<li class="">
					<div class="content"><span>默认排序</span><i class="el-icon-check" style="display: none;"></i></div>
				</li>
				<li class="">
					<div class="content"><span>销量最高</span><i class="el-icon-check" style="display: none;"></i></div>
				</li>
				<li class="">
					<div class="content"><span>车价最高</span><i class="el-icon-check" style="display: none;"></i></div>
				</li>
				<li class="active">
					<div class="content"><span>车价最低</span><i class="el-icon-check" style="display: none;"></i></div>
				</li>
				<li class="">
					<div class="content"><span>首付最低</span><i class="el-icon-check" style="display: none;"></i></div>
				</li>
				<li class="">
					<div class="content"><span>月供最低</span><i class="el-icon-check" style="display: none;"></i></div>
				</li>
			</ul>
			<!---->
			<!---->
			<!---->
			<!---->
			<div class="layout" style="height: 0px;"></div>
			<div class="total-number" style="display: none;">
				<span>
					为您找到133款新车
				</span>
			</div>
		</div>
		<div class="co-list-new-promotion">
			<div class="tag-info">
				<a target="_blank" href="http://homepage.souche-inc.com/v2/launchPlanApi/resourceUrl?planId=1256&amp;platformType=6&amp;cityName=成都">
					<img src="//img.souche.com/20190627/jpg/786979e83677eb84d1ad0522f9001ed8.jpg">
				</a>
			</div>
			<!---->
		</div>
		<buyList></buyList>
	</div>
</template>

<script>
	import index_header from "@/components/index_header.vue";
	import buyList from "@/components/buyList.vue";
	export default {
		data() {
			return {

			}
		},
		methods: {
			search: function() {
				axios.get('/searchCar', {
					params: {
						kw: ""
					}
				}).then((response) => {
					this.carName = response.data;
				}).catch(function(error) {
					console.log(error);
				});
			}
		},
		components: {
			Head: index_header,
			buyList
		},
	}
</script>

<style>
	.pg-list-index .filter-content {
		position: relative;
	}

	.co-list-filter .menu {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		background-color: #fff;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 0.8125rem;
		height: 2.75rem;
		position: relative;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0 1rem;
	}

	.co-list-filter .menu .filter-item {
		width: 20%;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.co-list-filter .menu .filter-item span {
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-right: 0.3125rem;
	}

	.co-list-filter .menu .filter-item .ico {
		width: 0.5rem;
		height: 0.5rem;
	}

	.co-list-filter .menu .filter-item .ico-filter {
		width: 0.875rem;
		height: 0.875rem;
	}

	.co-list-new-promotion .tag-info img {
		width: 100%;
		vertical-align: bottom;
	}
</style>
