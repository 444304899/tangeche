<template>
	<div class="questions">

		<div class="pg-qa">
			<header-inner class="hd"></header-inner>
			<div class="title">弹弹问答</div>
			<div class="question-types">
				<div class="question-type"><span class="">购车说明</span></div>
				<div class="question-type"><span class="">费用说明</span></div>
				<div class="question-type"><span class="">租后方案</span></div>
				<div class="question-type"><span class="active">保险服务</span></div>
				<div class="question-type"><span class="">违章处理</span></div>
				<div class="question-type"><span class="">用车规则</span></div>
				<div class="question-type"><span class="">其他问题</span></div>
			</div>
			<el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="question-types">
				<el-tab-pane label="用户管理" name="first" class="question-type">
					<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
					 text-color="#fff" active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-1">选项1</el-menu-item>
								<el-menu-item index="1-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
					</el-menu>
				</el-tab-pane>
				<el-tab-pane label="配置管理" name="second" class="question-type">配置管理</el-tab-pane>
				<el-tab-pane label="角色管理" name="third" class="question-type">角色管理</el-tab-pane>
				<el-tab-pane label="定时任务补偿" name="fourth" class="question-type">定时任务补偿</el-tab-pane>
			</el-tabs>
			<div class="tan-qa" style="display: block;">
				<div class="pear-home-qa">
					<div class="container">
						<div id="47" class="item anchorIndex">
							<div class="question">
								车辆会过户给我吗？

								<i class="el-icon-arrow-down" style="display: none;"></i>
								<i class="el-icon-arrow-up"></i>
							</div>
							<div class="answer" style="display: none;">第一年租赁到期后不管是选择分期购买还是一次性买断方案，只要您符合上牌要求则车辆都是会过户到您名下的哦。</div>
						</div>
						<div class="more"></div>
					</div>
				</div>
			</div>
			<div class="blank"></div>
			<div class="customer-service">
				<div class="service-left">
					<div>工作时间</div>
					<div>09:00-21:00</div>
				</div><a href="tel:4008010010" class="service-right"><img src="//img.souche.com/f2e/efd8480f02534f44c800c4b86a31a311.png">
					客服电话
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first'
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style>
	.pg-qa {
		height: 100%;
	}

	.pg-qa .title {
		padding: 1.0625rem 0 1.0625rem 1rem;
		font-size: 1.0625rem;
		color: #141526;
		position: relative;
	}

	.pg-qa .hd:after {
		-webkit-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 0.0625rem;
		background-color: #ebedf0;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}

	.pg-qa .title:after {
		-webkit-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 0.0625rem;
		background-color: #ebedf0;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}

	.pg-qa .question-types {
		padding: 0.625rem;
		position: relative;
	}

	.pg-qa .question-type,
	.pg-qa .question-type span {
		display: inline-block;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.pg-qa .question-type {
		width: 33.33333%;
		padding: 0.375rem;
	}

	.pg-qa .question-type .active {
		background: #fff9e5;
		border: 0.0625rem solid #ffc300;
	}

	.pg-qa .question-type span {
		background: #f7f7f9;
		width: 100%;
		height: 2.25rem;
		line-height: 2.25rem;
		text-align: center;
		font-size: 0.8125rem;
		color: #141426;
		border-radius: 0.25rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 0 0.375rem;
		border: 0.0625rem solid #f7f7f9;
	}

	.pear-home-qa .container {
		background: #fff;
		padding-left: 1rem;
	}

	.pear-home-qa .container .item {
		position: relative;
	}

	.pear-home-qa .container .item .question {
		font-size: 0.9375rem;
		padding: 1.125rem 2.5rem 1.125rem 1rem;
		line-height: 1.25rem;
		color: #1a1d33;
		position: relative;
	}

	.pear-home-qa .container .item .answer {
		font-size: 0.8125rem;
		color: #5e5e66;
		padding: 0.125rem 2.5rem 1.25rem 0.875rem;
		line-height: 1.375rem;
		word-wrap: break-word;
	}

	.pear-home-qa .container .item .question:before {
		content: "";
		position: absolute;
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 50%;
		background: #ffc400;
		top: 1.5625rem;
		left: 0.125rem;
	}

	.pear-home-qa .container .item .question i {
		position: absolute;
		right: 1rem;
		top: 0.8125rem;
		width: 1.25rem;
		margin-top: 0.375rem;
	}
</style>
