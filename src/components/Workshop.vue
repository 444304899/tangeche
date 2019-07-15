<template>
	<div class="pear-dog-workshop-scroll">
		<div class="nav-header"><span class="fs-20 text-weight">弹车工坊</span>
			<router-link to="/workshop" class="all-card fs-13">
				更多<i class="el-icon-arrow-right" style="height: 1rem;"></i>
			</router-link>
		</div>
		<div class="som-slide-page" style="height: 12.0625rem;">
			<div class="som-slide-page-Box leftDisplayFlex" style="transition: transform 300ms ease-out 0s; transform: translate3d(0, 0, 0);">
				<div class="nav-content fs-14 dog-workshop-card-box" style="width: 100vw;">
					<div class="pear-dog-workshop-card">
						<router-link to="/article/338">
							<div class="card-img">
								<img width="100%" height="100%" class="oss-image img" style="width: 19.575rem; height: 7.528875rem;" data-src="//souche.oss-cn-hangzhou.aliyuncs.com/20190709/jpg/090d09468249ebc3dcb73d499d188acc.jpg?x-oss-process=image/resize,m_fill,w_939,h_360"
								 src="//souche.oss-cn-hangzhou.aliyuncs.com/20190709/jpg/090d09468249ebc3dcb73d499d188acc.jpg?x-oss-process=image/resize,m_fill,w_939,h_360"
								 lazy="loaded">
							</div>
							<div class="title">
								<h3 class="fs-17">月薪4千就能入手的车，心动了吗？</h3><span class="article-typeName fs-12">帮你选车</span><span class="fs-12">3赞<i></i>0条评论<i></i>4011人看过</span>
							</div>
						</router-link>
					</div>
					<div class="pear-dog-workshop-card">
						<router-link to="/article/337">
							<div class="card-img">
								<img width="100%" height="100%" class="oss-image img" style="width: 19.575rem; height: 7.528875rem;" data-src="//souche.oss-cn-hangzhou.aliyuncs.com/20190701/jpg/f36d78e8bdcb1e6be4aa5f2c682cf52d.jpg?x-oss-process=image/resize,m_fill,w_939,h_360"
								 src="//souche.oss-cn-hangzhou.aliyuncs.com/20190701/jpg/f36d78e8bdcb1e6be4aa5f2c682cf52d.jpg?x-oss-process=image/resize,m_fill,w_939,h_360"
								 lazy="loaded">
							</div>
							<div class="title">
								<h3 class="fs-17">国五撞上国六，该如何抉择？</h3><span class="article-typeName fs-12">帮你选车</span><span class="fs-12">6赞<i></i>0条评论<i></i>8241人看过</span>
							</div>	
						</router-link>
					</div>
					<div class="pear-dog-workshop-card">
						<router-link to="/article/336">
							<div class="card-img">
								<img width="100%" height="100%" class="oss-image img" style="width: 19.575rem; height: 7.528875rem;" data-src="//souche.oss-cn-hangzhou.aliyuncs.com/20190627/jpg/e805e6a32fd71cc94b564e7a4618121e.jpg?x-oss-process=image/resize,m_fill,w_939,h_360"
								 src="//souche.oss-cn-hangzhou.aliyuncs.com/20190627/jpg/e805e6a32fd71cc94b564e7a4618121e.jpg?x-oss-process=image/resize,m_fill,w_939,h_360"
								 lazy="loaded">
							</div>
							<div class="title">
								<h3 class="fs-17">7月上新车辆，口碑不错，你确定不看看？</h3><span class="article-typeName fs-12">新车上架</span><span class="fs-12">1赞<i></i>0条评论<i></i>8547人看过</span>
							</div>
						</router-link>
					</div>

				</div>
			</div>
			<div class="next-page" style="display: none;"><i class="next-icon"></i></div>
		</div>
	</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.pear-dog-workshop-scroll {
		background-color: #fff;
	}

	.pear-dog-workshop-scroll .nav-header {
		padding: 1.25rem 1rem;
		height: 1.0625rem;
		font-size: 0;
		color: #1a1d33;
	}

	.pear-dog-workshop-scroll .nav-header span {
		display: inline-block;
		line-height: 1;
	}

	.pear-dog-workshop-scroll .nav-header .all-card {
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

	.pear-dog-workshop-scroll .nav-header .all-card i {
		margin-top: 0.125rem;
	}

	.som-slide-page {
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.som-slide-page .som-slide-page-Box {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		-webkit-transition: top 500ms ease-out;
		transition: top 500ms ease-out;
	}

	.pear-dog-workshop-scroll .nav-content .pear-dog-workshop-card:first-child {
		margin-left: 1rem;
	}

	.pear-dog-workshop-card .card-img {
		position: relative;
	}

	.pear-dog-workshop-card .card-img>.img {
		border-radius: 0.5rem;
		display: block;
		background-position: 50%;
		background-size: cover;
	}

	.pear-dog-workshop-card .title {
		line-height: 1.2;
	}

	.pear-dog-workshop-card .title h3 {
		color: #333;
		margin: 1rem auto 0.5rem 0;
		line-height: 1.0625rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.pear-dog-workshop-card .title span {
		color: #8d8e99;
		font-size: 0.75rem;
		line-height: 0.75rem;
		display: inline-block;
		vertical-align: top;
		margin-bottom: 1.25rem;
		height: 0.75rem;
	}

	.pear-dog-workshop-card .article-typeName {
		margin-right: 1rem;
	}

	.pear-dog-workshop-card .title span {
		color: #8d8e99;
		font-size: 0.75rem;
		line-height: 0.75rem;
		display: inline-block;
		vertical-align: top;
		margin-bottom: 1.25rem;
		height: 0.75rem;
	}

	.pear-dog-workshop-card .title i {
		margin: 0 0.25rem;
	}

	.pear-dog-workshop-scroll .nav-content .pear-dog-workshop-card {
		width: 87vw;
		margin: 0 0.5rem;
		height: 105%;
		float: left;
	}

	.fs-14 {
		font-size: 0.875rem;
	}

	.nav-content {
		overflow-x: scroll;
		white-space: nowrap;
		overflow-y: hidden;
		display: flex;
	}
</style>
