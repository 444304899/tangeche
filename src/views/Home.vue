<template>
	<div class="home">
		<Head />
		<router-link to="/introduction" style="display: block;position: relative;">
			<img width="100%" height="100%" src="http://img.souche.com/f2e/6cfcd21e6fd2841e7d75056923ee6b7b.png?x-oss-process=image/format,webp"
			 alt />
		</router-link>
		<div class="index-featureList mb-12">
			<div class="feature-item">
				<img src="//img.souche.com/f2e/ab43e0bd785d69ed82dd7fd94ce71ffc.png" class="item-img" alt />
				<div class="item-title">首付低</div>
				<div class="item-desc">含购置税和1年保险</div>
			</div>
			<div class="feature-item">
				<img src="//img.souche.com/f2e/0edca0b5e9235b35f684ce9ae2d4d5fa.png" class="item-img" alt />
				<div class="item-title">极速审核</div>
				<div class="item-desc">5分钟完成</div>
			</div>
			<div class="feature-item">
				<img src="//img.souche.com/f2e/6dd3385b1f52ee09d405f86cfe1ffc13.png" class="item-img" alt />
				<div class="item-title">门店多</div>
				<div class="item-desc">网点覆盖全国</div>
			</div>
		</div>
		<div class="co-dog-demand mb-12">
			<div class="demand-title">提交购车需求，金牌顾问为您服务</div>
			<div class="demand-inps"></div>
			<div class="demand-submit">帮我买车</div>
		</div>
		<a href="http://homepage.souche.com/v2/launchPlanApi/resourceUrl?planId=1324&amp;platformType=6" class="pear-other-link dynamic-banner"><img
			 src="//img.souche.com/20190711/gif/fdf6f84719d87d68c31d32fbf02485c9.gif"></a>
		<div class="pear-dog-index-tab">
			<router-link to="/buy" class="tab-item">
				<img src="//img.souche.com/f2e/7944356c1d7271b2b22a733056b4e9e7.png" alt="" class="enter-logo">
				<p class="tab-name">弹新车</p>
			</router-link>
			<router-link to="/buy/used?saleType=C_FWBZ_JISU" class="tab-item">
				<img src="//img.souche.com/f2e/bc25645532c2556c28b7108366dc2c2b.png" alt="" class="enter-logo">
				<p class="tab-name">认证准新车</p>
			</router-link>
			<router-link to="/activity/trade" class="tab-item">
				<img src="//img.souche.com/f2e/e36eaed362fea4801e101389c180261f.png" alt="" class="enter-logo">
				<p class="tab-name">以旧换新</p>
			</router-link>
			<router-link to="/workshop" class="tab-item">
				<img src="//img.souche.com/f2e/4b7321c07a76fa2588708baebf7bc625.png" alt="" class="enter-logo">
				<p class="tab-name">弹车工坊</p>
			</router-link>
			<router-link to="/collect/three-choose" class="tab-item">
				<img src="//img.souche.com/f2e/0d0be6f78f957ccf10b97fba97f5b8ab.png" alt="" class="enter-logo">
				<p class="tab-name">3步挑新车</p>
			</router-link>
		</div>
		<div class="pear-dog-index-tab-bottom mb-12"></div>
		<div class="pear-dog-index-navigation mb-12">
			<div class="nav-header"><span class="fs-17 text-weight">新车优选</span>
				<router-link to="/buy" class="all-new-car fs-13">全部新车
					<i class="el-icon-arrow-right" style="height: 1rem;"></i>
				</router-link>
			</div>
			<div class="nav-content fs-14">
				<div class="nav-content-group">
					<div class="nav-content-item"><a href="/buy?brandCode=brand-121&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/oXqQfOLA7x.png"
							 alt="" class="brand-logo"><span>日产</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-41&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/lMQ7DAjvSF.png"
							 alt="" class="brand-logo"><span>大众</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-27&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/4NMdX1NErQ.png"
							 alt="" class="brand-logo"><span>本田</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-15&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/Fcs7NHo0cp.png"
							 alt="" class="brand-logo"><span>奥迪</span></a></div>
				</div>
				<div class="nav-content-group">
					<div class="nav-content-item"><a href="/buy?brandCode=brand-25" class="nav-block"><img src="//img.souche.com/files/tangeche/pbKe6ALC2Z.png"
							 alt="" class="brand-logo"><span>奔驰</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-30&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/n7s5lnUKD9.png"
							 alt="" class="brand-logo"><span>别克</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-53&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/4V8qf0BDNQ.png"
							 alt="" class="brand-logo"><span>福特</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-20" class="nav-block"><img src="//img.souche.com/files/tangeche/se4CGU1icU.png"
							 alt="" class="brand-logo"><span>宝马</span></a></div>
				</div>
				<div class="nav-content-group">
					<div class="nav-content-item"><a href="/buy?brandCode=brand-154&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/TD8si8cV40.png"
							 alt="" class="brand-logo"><span>雪佛兰</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-72&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/YW8wMAytMG.png"
							 alt="" class="brand-logo"><span>吉利</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-56&amp;orderBy=sale_desc" class="nav-block"><img src="//img.souche.com/files/tangeche/OU80kTufNy.png"
							 alt="" class="brand-logo"><span>广汽传祺</span></a></div>
					<div class="nav-content-item"><a href="/buy?brandCode=brand-49" class="nav-block"><img src="//img.souche.com/files/tangeche/GGKgBIoaRg.png"
							 alt="" class="brand-logo"><span>丰田</span></a></div>
				</div>
				<div class="nav-content-group">
					<div class="nav-content-item"><a href="/buy?carShapeCode=SUV&amp;orderBy=sale_desc" class="nav-block">
							<!----><span>热门SUV</span></a></div>
					<div class="nav-content-item"><a href="/buy?saleType=B_JINRONG_ZREO" class="nav-block">
							<!----><span>首付0元</span></a></div>
					<div class="nav-content-item"><a href="/buy?orderBy=installment_asc" class="nav-block">
							<!----><span>月供2千</span></a></div>
					<div class="nav-content-item"><a href="/buy?newPrice=0-100000" class="nav-block">
							<!----><span>10万以下</span></a></div>
				</div>
			</div>
		</div>
		<recommend></recommend>
		<images></images>
		<workshop></workshop>
		
		<div class="pg-index-recommend">
			<img src="//img.souche.com/f2e/e8b0133ce7bce79abaf6655ff87bd42a.png" width="18" height="18">
			<span class="fs-17">猜你喜欢</span>
		</div>
		
		<carList></carList>
		<footInfo></footInfo>
		
		
	</div>
</template>

<script>
	// @ is an alias to /src
	import index_header from "@/components/index_header.vue";
	import Recommend from "@/components/Recommend.vue";
	import Images from "@/components/indexImages.vue";
	import Workshop from "@/components/Workshop.vue";
	import footInfo from "@/components/footInfo.vue";
	import carList from "@/components/carList.vue";
	export default {
		name: "home",
		data() {
			return {
				recommends: []
			}
		},
		components: {
			Head: index_header,
			recommend: Recommend,
			images: Images,
			workshop: Workshop,
			footInfo: footInfo,
			carList: carList
		},
		methods: {

		},
		  created:function() {
		    this.axios.get('/getCar'
			,{
		        params:{
		            newUsed: "new"
		        }
		    }
			).then((response) => {
				this.recommends = response.data;
			}).catch(function (error) { console.log(error); });
		},
	};
</script>
<style>
	.home {
		background-color: rgb(245, 245, 245);
		position: static;
		/* height: 40rem; */
		width: 100%;
	}

	.index-featureList {
		background: #fff;
		padding: 1rem 0.5rem;
		line-height: 1;
		position: relative;
	}

	.mb-12 {
		margin-bottom: 0.75rem;
	}

	.pear-dog-index-tab-bottom {
		font-size: 0;
		padding-bottom: 0.375rem;
		background: #fff;
	}

	.feature-item {
		display: inline-block;
		width: 33.3%;
		text-align: center;
	}

	.item-img {
		vertical-align: top;
		width: 2rem;
	}

	.item-title {
		margin: 0.3125rem 0 0.375rem;
		color: #141414;
		font-size: 0.8125rem;
		width: 100%;
	}

	.item-desc {
		color: #4b4c53;
		font-size: 0.75rem;
		width: 100%;
	}

	.co-dog-demand {
		padding: 1.5rem 1rem 1.25rem;
		background: #fff;
		color: #000;
	}

	.co-dog-demand,
	.demand-title {
		font-size: 1.0625rem;
		line-height: 1.0625rem;
		margin-bottom: 1.25rem;
		text-align: center;
		font-weight: 700;
	}

	.demand-submit {
		margin-top: 1.25rem;
		line-height: 3rem;
		border-radius: 1.5rem;
		background: #ffc300;
		text-align: center;
		font-size: 1.0625rem;
		font-weight: 700;
	}

	.dynamic-banner {
		background: #fff;
	}

	.pear-other-link {
		display: block;
		color: #000;
	}

	.dynamic-banner img {
		width: 100%;
		vertical-align: top;
	}

	.pear-dog-index-tab {
		padding: 0.9375rem 0.25rem 0.75rem;
		background-color: #fff;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
	}

	.pear-dog-index-tab .tab-item {
		width: 33%;
		text-align: center;
	}

	.pear-dog-index-tab .tab-item img {
		margin-bottom: 0.25rem;
	}

	.pear-dog-index-tab .enter-logo {
		width: 4.125rem;
		height: 2.75rem;
	}

	.pear-dog-index-tab .tab-name {
		color: #1a1d33;
		font-size: 0.8125rem;
		margin-top: -0.1875rem;
	}

	.pear-dog-index-tab p {
		margin: 0;
		padding: 0;
		line-height: 1;
	}

	.pear-dog-index-navigation {
		padding: 0 0.5rem 0 0.25rem;
		background-color: #fff;
	}

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

	.fs-13 {
		font-size: 0.8125rem;
	}

	.fs-17 {
		font-size: 1.0625rem;
	}

	.text-weight {
		font-weight: 600;
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

	.pear-dog-index-navigation .nav-content {
		padding-top: 0.8125rem;
		padding-bottom: 0.1875rem;
		overflow: hidden;
	}

	.pear-dog-index-navigation .nav-content-group {
		display: -ms-flexbox;
		display: -webkit-box;
		display: flex;
		-ms-flex-pack: justify;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}

	.pear-dog-index-navigation .nav-content-item {
		width: 5.125rem;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		text-align: center;
	}

	.pear-dog-index-navigation .nav-content .nav-block {
		margin-bottom: 1rem;
		display: inline-block;
	}

	.pear-dog-index-navigation .nav-content .brand-logo {
		height: 1.5rem;
		width: 1.5rem;
		vertical-align: middle;
		margin-right: 0.125rem;
	}

	.pear-dog-index-navigation .nav-content .nav-block span {
		vertical-align: middle;
	}
	.pg-index-recommend {
    font-size: 0.9375rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.875rem 0 0.625rem 0;
}
	.pg-index-recommend:after, 
	.pg-index .pg-index-recommend:before {
    content: "";
    display: block;
    height: 0.0625rem;
    width: 2.75rem;
    background: #ebedf0;
    margin: 0 1rem;
}
.pg-index-recommend img {
    margin-right: 0.375rem;
	margin-left: 4.5rem;
}

</style>
