<template>
	<div class="footer-info">
		<img src="//img.souche.com/f2e/7fa890bd12b35db3ad32f8a6341cf1cf.png" class="tangeche-logo">
		<div class="investors">＊1成首付由融资租赁方式提供服务，页面展示车型金融方案均按10%首付计算，实际方案以信用审核情况为准。</div>
		<p class="investors">2013年至今，大搜车获得了阿里巴巴、蚂蚁金服、美国华平投资集团、春华资本、招银国际、晨兴资本、源渡创投等多个实力雄厚的资方融资。</p><img src="//assets.souche.com/projects/finance-f2e/finance-tangeche-m/img/footer_logo.a40af362.png"
		 class="investors-logo">
		<div class="company-info">
			<p>北京搜车网科技有限公司 客服热线：<a href="tel:4008-010-010">{{tel}}</a></p>
			<p>北京市海淀区巨山路78号院209室</p>
			<p>京 ICP备 13012136号 京公网安备 11010802013095号</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "home",
		data() {
			return {
				tel: "4008-010-010"
			}
		},
	};
</script>

<style>
	.footer-info {
		text-align: center;
		padding: 1.6875rem 0;
	}

	.footer-info .tangeche-logo {
		width: 5.4375rem;
		margin-bottom: 2rem;
	}

	.footer-info .investors {
		padding: 0 2rem;
		font-size: 0.8125rem;
		line-height: 1.5rem;
		color: #4b4c53;
	}

	.footer-info .investors-logo {
		width: 19.4375rem;
		margin: 0.75rem 0 2rem;
	}

	.footer-info .company-info {
		font-size: 0.75rem;
		line-height: 1.25rem;
		color: #7a7a87;
	}

	.footer-info .company-info a {
		color: #7a7a87;
	}
</style>
