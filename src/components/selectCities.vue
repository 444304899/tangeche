<template>
	<div class="selectCities" :class="{isopen:isTrue}">
		<div class="pg-index-cities">
			<div class="city-header">
				<i class="el-icon-arrow-left" @click="close"></i>
				<span>选择城市</span>
			</div>
			<div class="som-city-selector">
				<ul class="cities">
					<li>
						<div class="section entire-country">*</div>
						<ul>
							<li class="inner-list">
								<span>全国</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">A</div>
						<ul>
							<li class="inner-list">
								<span>安徽</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">B</div>
						<ul>
							<li class="inner-list">
								<span>北京</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">C</div>
						<ul>
							<li class="inner-list">
								<span>重庆</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">F</div>
						<ul>
							<li class="inner-list">
								<span>福建</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">G</div>
						<ul>
							<li class="inner-list">
								<span>广东</span>
							</li>
							<li class="inner-list">
								<span>广西</span>
							</li>
							<li class="inner-list">
								<span>甘肃</span>
							</li>
							<li class="inner-list">
								<span>贵州</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">H</div>
						<ul>
							<li class="inner-list">
								<span>海南</span>
							</li>
							<li class="inner-list">
								<span>河北</span>
							</li>
							<li class="inner-list">
								<span>河南</span>
							</li>
							<li class="inner-list">
								<span>黑龙江</span>
							</li>
							<li class="inner-list">
								<span>湖北</span>
							</li>
							<li class="inner-list">
								<span>湖南</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">J</div>
						<ul>
							<li class="inner-list">
								<span>吉林</span>
							</li>
							<li class="inner-list">
								<span>江苏</span>
							</li>
							<li class="inner-list">
								<span>江西</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">L</div>
						<ul>
							<li class="inner-list">
								<span>辽宁</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">N</div>
						<ul>
							<li class="inner-list">
								<span>内蒙古</span>
							</li>
							<li class="inner-list">
								<span>宁夏</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">Q</div>
						<ul>
							<li class="inner-list">
								<span>青海</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">S</div>
						<ul>
							<li class="inner-list">
								<span>山西</span>
							</li>
							<li class="inner-list">
								<span>山东</span>
							</li>
							<li class="inner-list">
								<span>上海</span>
							</li>
							<li class="inner-list">
								<span>陕西</span>
							</li>
							<li class="inner-list">
								<span>四川</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">T</div>
						<ul>
							<li class="inner-list">
								<span>天津</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">X</div>
						<ul>
							<li class="inner-list">
								<span>新疆</span>
							</li>
							<li class="inner-list">
								<span>西藏</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">Y</div>
						<ul>
							<li class="inner-list">
								<span>云南</span>
							</li>
						</ul>
					</li>
					<li>
						<div class="section">Z</div>
						<ul>
							<li class="inner-list">
								<span>浙江</span>
							</li>
						</ul>
					</li>
				</ul>
				<div class="level2" style="transition-duration: 240ms;">
					<div class="province-title"></div>
					<div class="scroll-list">
						<ul>
							<li class="all inner-list">
								<span>全省</span>
							</li>
							<li class="inner-list" style="display: none;">
								<span>不限城市</span>
							</li>
							<li class="selectedProvience"></li>
							<div>
								<div class="inner-list">
									<span>合肥</span>
								</div>
							</div>
						</ul>
					</div>
				</div>
				<ul class="letterList" style="color: rgb(255, 196, 0); transition-duration: 240ms;">
					<li>*</li>
					<li>A</li>
					<li>B</li>
					<li>C</li>
					<li>F</li>
					<li>G</li>
					<li>H</li>
					<li>J</li>
					<li>L</li>
					<li>N</li>
					<li>Q</li>
					<li>S</li>
					<li>T</li>
					<li>X</li>
					<li>Y</li>
					<li>Z</li>
				</ul>
				<!---->
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				flag: true,
				isTrue: true
			};
		},
		watch: {
			open: function() {
				if (this.open) {
					this.isTrue = false
				}
			}
		},
		props: {
			open: String
		},
		methods: {
			close() {
				this.isTrue = true;
				this.$emit('myevent', "")
			}
		}
	};
</script>

<style scoped>
	.selectCities {
		background: #fff;
		font-size: 0.875rem;
		color: #1a1a1a;
		overflow-x: hidden !important;
	}

	.pg-index-cities {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 200;
	}

	.city-header {
		line-height: 3.375rem;
		background: #fff;
		text-align: center;
		position: relative;
		font-size: 1.125rem;
	}

	.city-header i {
		position: absolute;
		left: 0.75rem;
		top: 1rem;
		width: 0.75rem;
		height: 1.375rem;
		line-height: 1.375rem;
		font-size: 2rem;
	}

	.som-city-selector .section,
	.som-city-selector .som-selector-item__title {
		font-size: 0.75rem;
		background-color: #f2f2f2;
		color: #666;
		line-height: 1.75rem;
		padding: 0 1rem;
	}

	.som-city-selector {
		overflow-x: hidden;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		background-color: #fff;
		-webkit-overflow-scrolling: touch;
		position: relative;
	}

	.som-city-selector .cities {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		overflow-y: scroll;
		margin-right: 2rem;
		text-align: left;
	}

	.cities>li .section {
		background-color: #f3f3f3;
		line-height: 1.75rem;
		padding: 0 1rem;
	}

	.cities .inner-list {
		padding: 0.75rem 1rem;
		position: relative;
	}

	.inner-list:after {
		content: "";
		height: 0.0625rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		-ms-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
		-webkit-transform-origin: 100% 100%;
		background: #ccc;
	}

	.letterList {
		font-size: 0.75rem;
		width: 100%;
		background-color: #fff;
		position: fixed;
		z-index: 2;
		top: 50%;
		right: 0;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		text-align: center;
		width: 2rem;
		color: #ff571a;
	}

	.level2 {
		position: fixed;
		top: 0;
		z-index: 3;
		width: 80%;
		background-color: #fff;
		-webkit-transform: translate3d(125%, 0, 0);
		transform: translate3d(125%, 0, 0);
		-webkit-transition: -webkit-transform 240ms;
		transition: -webkit-transform 240ms;
		transition: transform 240ms;
		transition: transform 240ms, -webkit-transform 240ms;
		-webkit-perspective: 1000;
		perspective: 1000;
		box-shadow: -0.3125rem 0px 0.3125rem rgba(0, 0, 0, 0.1);
	}

	.level2 .province-title {
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		position: relative;
	}

	.level2 .scroll-list {
		overflow-y: scroll;
		height: -webkit-calc(100vh - 2.75rem);
		height: calc(100vh - 2.75rem);
	}

	.level2 .province-title:after {
		content: "";
		height: 0.0625rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		-ms-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
		-webkit-transform-origin: 100% 100%;
		background: #d9d9d9;
	}

	.som-city-selector .cities,
	.som-city-selector .level2 ul {
		padding-bottom: 9.375rem;
	}

	.level2 .selectedProvience {
		background-color: #f3f3f3;
		color: #666;
		font-size: 0.75rem;
		line-height: 1.75rem;
		padding-left: 1rem;
	}

	.isopen {
		display: none;
	}
</style>
