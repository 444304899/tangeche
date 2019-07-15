<template>
	<div class="co-header-index" backtype="1">
		<div class="header flex"><a href="/" class="logo-div router-link-active"><img src="//assets.souche.com/projects/finance-f2e/finance-tangeche-m/img/logo_3x.b8302021.png"
				 width="80"></a>
			<!---->
			<div class="flex-1"></div>
			<More style="margin: 1rem 1rem 0 1rem;"></More>
		</div>
	</div>
</template>

<script>
	import More from "@/components/More.vue";
	export default {
		data() {
			return {

			};
		},
		components: {
			More
		},
		methods: {}
	};
</script>

<style>
	.co-header-index {
		background: #fff;
		position: relative;
	}

	.co-header-index .header {
		height: 3.375rem;
		width: 100%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		background: #fff;
	}

	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-flex;
	}

	.co-header-index .header .logo-div {
		margin: auto 0 auto 1rem;
	}

	.co-header-index .header .logo-div img {
		vertical-align: middle;
	}

	.flex .flex-1 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		-webkit-flex: 1;
	}
	.co-header-index:after {
		background-color: #e6e6e6;
		-webkit-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 0.0625rem;
		background-color: var(--line-b);
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
	}
	
</style>
